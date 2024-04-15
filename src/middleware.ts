import { doubleCsrf } from "csrf-csrf";
import config from "./config";

const {
    doubleCsrfProtection,
    generateToken
} = doubleCsrf({
    getSecret: () => config.website.secret,
    cookieName: '__Host-psifi.x-csrf-token',
    cookieOptions: {
        secure: true
    }
});
export default doubleCsrfProtection;
export function onRequest ({ locals, request }, next) {
    locals.csrfToken = generateToken;
    doubleCsrfProtection;
    next();
}