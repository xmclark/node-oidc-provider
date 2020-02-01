const b64uRegExp = /^[a-zA-Z0-9_-]*$/;

const fromBase64 = (base64: string) => base64.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

const toBase64 = (base64url: string) => base64url.replace(/-/g, '+').replace(/_/g, '/');

export const encode = (input: string, encoding: BufferEncoding = 'utf8') => fromBase64(Buffer.from(input, encoding).toString('base64'));

export const encodeBuffer = (buf: Buffer) => fromBase64(buf.toString('base64'));

export const decode = (input: string) => {
  if (!b64uRegExp.test(input)) {
    throw new TypeError('input is not a valid base64url encoded string');
  }
  return Buffer.from(toBase64(input), 'base64').toString('utf8');
};

export const decodeToBuffer = (input: string) => {
  if (!b64uRegExp.test(input)) {
    throw new TypeError('input is not a valid base64url encoded string');
  }
  return Buffer.from(toBase64(input), 'base64');
};
