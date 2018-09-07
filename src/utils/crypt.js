import Cryptr from "cryptr";


let cryptr = new Cryptr('my-encryption-text');

export function getCookie(name) {
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length == 2) return cryptr.decrypt(parts.pop().split(";").shift());
}

export function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

export function createCookie(name, value, durationDays = 364, domain = ''){
  document.cookie = cryptr.encrypt(`${name}=${value}; max-age=${durationDays*86400}; ${(domain) ? `domain=${domain};` : ''}`);
}
