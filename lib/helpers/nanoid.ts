import nanoid from 'nanoid/generate';

// base64url charset
const CHARSET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';

export const naonid = (length = 21, charset = CHARSET) => nanoid(charset, length);
