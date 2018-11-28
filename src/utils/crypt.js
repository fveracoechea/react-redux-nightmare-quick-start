import Cryptr from "cryptr";


let cryptr = new Cryptr('my-encryption-text');

export const userCookieName = 'userCookieName';
export const bearerCookieName = 'bearerCookieName';
export const projectURL = 'http://localhost:3000';
const loginPath = '/login';

export function validateAuth() {
  if(!getCookie(userCookieName)){
    window.location.assign(projectURL + loginPath);
  }
  if(!getCookie(bearerCookieName)){
    window.location.assign(projectURL + loginPath);
  }
}

export function getCookie(name) {
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length == 2) return cryptr.decrypt(parts.pop().split(";").shift());
}

export function getUser(){
  validateAuth();
  if(getCookie(userCookieName)){
    return JSON.parse(cryptr.decrypt(getCookie(userCookieName)));
  } else {
    return false;
  }
}

export function getBearer(){
  validateAuth();
  if(getCookie(bearerCookieName)){
    return cryptr.decrypt(getCookie(bearerCookieName));
  } else {
    return false;
  }
}

export function logout(){
  deleteCookie(userCookieName);
  deleteCookie(bearerCookieName);
}

export function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

export function createCookie(name, value, durationDays = 364, domain = ''){
  document.cookie = cryptr.encrypt(`${name}=${value}; max-age=${durationDays*86400}; ${(domain)? 'domain=${domain}'} : '';`);
}
