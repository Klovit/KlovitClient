import mime from 'mime';
import statuses from 'statuses';
import * as fs from 'fs/promises';
import * as path from 'path';
import { parse } from 'cookie';
import { EventEmitter } from 'events';
import { Accepts } from '@tinyhttp/accepts';
import { validateRequest } from 'zod-express-middleware';

class ExpressError extends Error {
    constructor(message, code = 400) {
        super(message);
        this.code = code;
    }
}

class ExpressResponse extends Headers {
    constructor(astroContext) {
        super();
        this.astroContext = astroContext;
        this._responseClosed = false;
        this.responseBody = '';
        this.statusCode = 200;
    }
    cookie(key, value, options) {
        this.astroContext.cookies.set(key, value, options);
        return this;
    }
    clearCookie(key, options) {
        this.astroContext.cookies.delete(key, options);
        return this;
    }
    type(type) {
        type = mime.getType(type) || type;
        this.set('Content-Type', `${type}; charset=utf-8`);
        return this;
    }
    status(status) {
        this.statusCode = status;
        return this;
    }
    json(body) {
        this.responseBody = JSON.stringify(body);
        this.type('json');
        return this;
    }
    html(body) {
        this.responseBody = body;
        this.type('html');
        return this;
    }
    send(body) {
        if (this._responseClosed) {
            throw new ExpressError('Response already closed');
        }
        if (body instanceof Buffer || body instanceof Uint8Array) {
            this.responseBody = body;
        }
        else if (typeof body === 'object' && body !== undefined) {
            return this.json(body);
        }
        this.responseBody = body;
        return this;
    }
    end(body) {
        this.send(body);
        this._responseClosed = true;
        return this;
    }
    sendStatus(status) {
        this.status(status);
        this.responseBody = statuses(status) || status.toString();
        return this;
    }
    redirect(url, status = 302) {
        this.set('Location', url);
        this.status(status);
        return this;
    }
    async sendFile(filePath) {
        const content = await fs.readFile(filePath);
        this.responseBody = content;
        this.type(filePath);
        return this;
    }
    async attachment(filePath, fileName = path.parse(filePath).name) {
        await this.sendFile(filePath);
        this.set('Content-Disposition', `attachment; filename="${fileName}"`);
        return this;
    }
    cacheControl({ days = 0, months = 0, minuets = 0 }) {
        const totalSeconds = days * 24 * 60 * 60 + months * 30 * 24 * 60 * 60 + minuets * 60;
        this.set('Cache-Control', `max-age=${totalSeconds}`);
        return this;
    }
    _createResponseNativeObject() {
        return new Response(this.responseBody, {
            headers: this,
            status: this.statusCode
        });
    }
}

class ExpressBodyError extends ExpressError {
}

const BODY_REQUEST_TYPES_MAP = {
    json: 'application/json',
    multipart: 'multipart/form-data',
    urlencoded: 'application/x-www-form-urlencoded',
    text: 'text/plain'
};
const BODY_METHODS = ['POST', 'PUT', 'PATCH'];
class ExpressRequest extends EventEmitter {
    constructor(astroContext, _bodyOptions) {
        super();
        this.astroContext = astroContext;
        this._bodyOptions = _bodyOptions;
        this.query = {};
        this.cookies = {};
        this.session = {};
        this.body = {};
        this.headers = {};
        this.params = {};
        this.filesOne = {};
        this.filesMany = {};
        this.method = '';
        this.url = '';
        this.path = '';
        this.subdomains = [];
        this.hostname = '';
        this.ip = '';
        this.locals = {};
        this._response = new ExpressResponse(astroContext);
    }
    async _parse() {
        this.query = Object.fromEntries(this.astroContext.url.searchParams.entries());
        this.headers = Object.fromEntries([...this.astroContext.request.headers].map(([key, value]) => [key.toLowerCase(), value]));
        this.method = this.astroContext.request.method;
        this.url = this.astroContext.url.href;
        this.path = this.astroContext.url.pathname;
        this.cookies = parse(this.headers.cookie ?? '');
        this.locals = this.astroContext.locals;
        this.session = this.astroContext.locals.session;
        this.params = this.astroContext.params;
        this.subdomains = this.astroContext.url.hostname.split('.').slice(0, -2);
        this.hostname = this.astroContext.url.hostname;
        this.ip = this.astroContext.clientAddress;
        this._accepts = new Accepts(this);
        if (this._bodyOptions.type && BODY_METHODS.includes(this.method)) {
            await this.parseBody(this._bodyOptions.type);
        }
    }
    async parseBody(type) {
        if (!BODY_METHODS.includes(this.method)) {
            throw new ExpressBodyError(`Body parsing only available for ${BODY_METHODS.join(', ')}`, 500);
        }
        if (this.astroContext.request.bodyUsed) {
            throw new ExpressBodyError('Request body already used', 500);
        }
        if (type === 'auto') {
            const contentType = this.get('content-type').split(';').shift().trim();
            type = Object.entries(BODY_REQUEST_TYPES_MAP).find(([, value]) => value === contentType)?.[0] ?? contentType;
        }
        switch (type) {
            case 'json':
                this.body = await this.astroContext.request.json();
                break;
            case 'multipart':
                await this._parseBodyMultiPart();
                break;
            case 'urlencoded':
                this.body = await this.astroContext.request.formData();
                break;
            case 'text':
                this.body = await this.astroContext.request.text();
                break;
            default:
                throw new ExpressBodyError(`Unknown body type ${type}`);
        }
        return this.body;
    }
    async _parseBodyMultiPart() {
        var _a;
        try {
            const formData = await this.astroContext.request.formData();
            for (const [key, value] of formData) {
                if (typeof value === 'string') {
                    if (this.body[key]) {
                        if (!Array.isArray(this.body[key])) {
                            this.body[key] = [this.body[key]];
                        }
                        this.body[key].push(value);
                    }
                    else {
                        this.body[key] = value;
                    }
                    continue;
                }
                this.filesOne[key] = value;
                (_a = this.filesMany)[key] ?? (_a[key] = []);
                this.filesMany[key].push(value);
            }
        }
        catch (error) {
            this.error = error;
        }
    }
    get(headerName) {
        return this.headers[headerName.toLowerCase()];
    }
    is(type) {
        type = BODY_REQUEST_TYPES_MAP[type] ?? type;
        const contentType = this.get('content-type').split(';').shift().trim();
        return contentType === mime.getType(type);
    }
    accepts(types, ...args) {
        return this._accepts.types(types, ...args);
    }
    acceptsCharsets(types, ...args) {
        return this._accepts.charsets(types, ...args);
    }
    acceptsEncodings(types, ...args) {
        return this._accepts.encodings(types, ...args);
    }
    acceptsLanguages(types, ...args) {
        return this._accepts.languages(types, ...args);
    }
    param(name, defaultValue) {
        return this.params[name] ?? this.body[name] ?? this.query[name] ?? defaultValue;
    }
    header(name, defaultValue) {
        return this.get(name) ?? defaultValue;
    }
}

class ExpressRoute {
    constructor() {
        this._middleware = [];
        this._lastValidation = [];
        this._bodyOptions = { type: 'auto', default: true };
    }
    use(middleware) {
        if (middleware instanceof ExpressRoute) {
            this._middleware = this._middleware.concat(middleware._middleware);
            if (!middleware._bodyOptions.default) {
                this._bodyOptions = middleware._bodyOptions;
            }
            return this;
        }
        this._middleware.push(middleware);
        return this;
    }
    body(type) {
        this._bodyOptions = { type };
        return this;
    }
    validate(schemas) {
        this._lastValidation.push(validateRequest(schemas));
        return this;
    }
    route(...middlewares) {
        const bodyOptions = this._bodyOptions;
        const validation = this._lastValidation.pop();
        if (validation) {
            middlewares.unshift(validation);
        }
        return async (context) => {
            try {
                const request = new ExpressRequest(context, bodyOptions);
                await request._parse();
                await this._runMiddleware(request, middlewares);
                request.emit('close');
                request.emit('finish');
                return request._response._createResponseNativeObject();
            }
            catch (error) {
                return new Response(error.message, { status: error.status ?? 500 });
            }
        };
    }
    async _runMiddleware(req, extraMiddleware = []) {
        for (const middleware of this._middleware.concat(extraMiddleware)) {
            let runNext = false;
            let okToRunNext = () => runNext = true;
            await middleware(req, req._response, okToRunNext);
            if (!runNext) {
                break;
            }
        }
    }
}

export { ExpressRoute as E };
