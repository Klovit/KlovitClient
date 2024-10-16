import { doubleCsrf } from 'csrf-csrf';
import { c as config } from './config_CuAv1651.mjs';

const {
  doubleCsrfProtection,
  generateToken
} = doubleCsrf({
  getSecret: () => config.website.secret,
  cookieName: "__Host-psifi.x-csrf-token",
  cookieOptions: {
    secure: true
  }
});
function onRequest({ locals, request }, next) {
  locals.csrfToken = generateToken;
  next();
}

export { doubleCsrfProtection as d, onRequest as o };
