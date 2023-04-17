import CryptoJS from 'crypto-js';

export function generateHash(username, password) {
  const data = username + password;
  const hash = CryptoJS.SHA256(data).toString();
  return hash;
}
