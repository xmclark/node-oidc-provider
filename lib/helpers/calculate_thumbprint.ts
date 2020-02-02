import { createHash } from 'crypto';
import { encodeBuffer } from './base64url';

const normalize = (cert: string) => cert.replace(/(?:-----(?:BEGIN|END) CERTIFICATE-----|\s|=)/g, '');
const calculate = (hash: string, cert: string) => encodeBuffer(createHash(hash).update(Buffer.from(normalize(cert), 'base64')).digest());

export const calculate_thumbprint = {
  x5t: calculate.bind(undefined, 'sha1'),
  'x5t#S256': calculate.bind(undefined, 'sha256'),
};
