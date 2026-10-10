import { randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';

const KEY_LENGTH = 64;

export function hashPassword(plain) {
  const salt = randomBytes(16).toString('hex');
  const hash = scryptSync(plain, salt, KEY_LENGTH).toString('hex');
  return `scrypt$${salt}$${hash}`;
}

export function verifyPassword(plain, stored) {
  const [scheme, salt, hashHex] = String(stored ?? '').split('$');
  if (scheme !== 'scrypt' || !salt || !hashHex) return false;
  const expected = Buffer.from(hashHex, 'hex');
  const actual = scryptSync(String(plain), salt, expected.length);
  // timingSafeEqual ใช้เวลาเท่ากันไม่ว่าจะผิดตัวที่เท่าไร — กันการเดาจากเวลาที่ใช้ตอบ
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}