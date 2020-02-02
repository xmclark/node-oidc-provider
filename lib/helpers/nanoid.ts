import generate from 'nanoid/generate';

// base64url charset
const CHARSET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';

export const nanoid = (length = 21, charset = CHARSET) => generate(charset, length);
