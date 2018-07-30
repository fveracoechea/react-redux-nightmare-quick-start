// dependecies
import queryString from './queryString';
import { getBearer } from './crypt';


export const API = {
  domain: 'https://www.api.domain.com',
  path: '/api',
};

export function apiEndpoint(endpoint, qs) {
  let query = '';
  if(qs){
    query = `?${qs}`;
  }
  return `${API.domain}${API.path}${endpoint}${query}`;
}

export function apiOptions(options = {}){
  const { 
    method = 'GET',
    headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': getBearer()
    },
    body = false
  } = options,
  newOptions = {
    method,
    headers
  };
  if(body){
    newOptions.body = body;
  }
  return newOptions;
}

export function apiFetch(endpoint, options = {}, query = false){
  let qs;
  if(query){
    qs = queryString.stringify(query);
  }
  const getPromise = async () => {
    try {
      const fetchOptions = apiOptions(options);
      const fetchEndpoint = apiEndpoint(endpoint, qs);
      const response = await fetch(fetchEndpoint, fetchOptions);
      return response.json();
    } catch (e) {
      throw e;
    }
  }
  return getPromise();
}
export function apiSendForm(endpoint, formData = FormData, method = 'POST', query = false){
  let options = { 
    body:  formData, 
    method: method,
    headers: {
      'Accept': 'application/json',
      'Authorization': getBearer()
  }};
  const getPromise = async () => {
    try {
      const fetchEndpoint = apiEndpoint(endpoint, query);
      const response = await fetch(fetchEndpoint, options);
      return response.json();
    } catch (e) {
      throw e;
    }
  }
  return getPromise();
}
export function apiFile(endpoint, file = File){
  let formData = new FormData();
  formData.append('image', file);
  let options = { 
    body:  formData, 
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': getBearer()
  }};
  const getPromise = async () => {
    try {
      const fetchEndpoint = apiEndpoint(endpoint, undefined);
      const response = await fetch(fetchEndpoint, options);
      return response.json();
    } catch (e) {
      throw e;
    }
  }
  return getPromise();
}

export function apiNext(endpoint, options = {}, query = false){

  let qs = '';
  if(query){
    qs = '&' + queryString.stringify(query);
  }
  const getNextPromise = async () => {
    try {
      const fetchOptions = apiOptions(options);
      const response = await fetch(endpoint + qs, fetchOptions);
      return response.json();
    } catch (e) {
      throw e;
    }
  }
  return getNextPromise();
}
