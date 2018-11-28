import Ajax from 'ajax-nightmare';
import Result from './Result';
// functional programming styleds functions

// FUNCTIONS COMPOSERS
// pipe
export const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
// compose (inversed pipe)
export const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
// ------------------------------------------------------
// AJAX
// simple ajax request
export const ajax = (route = '', options = {}) => new Ajax(route, options);
// functional currying ajax request
export const $ajax = (route = '', options = {}) => {
  return (promise) => {
    const request = new Ajax(route, options);
    promise(request.result);
    return () => request.abort();
  };
};
// ------------------------------------------------------
// VALIDATIONS
export const isArray = variable => (variable instanceof Array);

export const isDefined = value => (value !== false && typeof value !== 'undefined' && value !== null && value !== 0);

export const isFunction = variable => typeof variable === 'function';

export const isObject = variable => (isDefined(variable) && typeof variable === 'object');

export const isFloat = n => (n % 1 !== 0);

export const isFirstRender = items => (items && items.length === 0) || !isDefined(items);

export const executeIfFunction = (f, param = null) => ((f instanceof Function) ? f(param) : f);

// ------------------------------------------------------
// FUNCTIONAL STATEMENTS
// if else
export const iif = value => isTrue => isFalse => (
  value
    ? executeIfFunction(isTrue, value)
    : executeIfFunction(isFalse, value)
);

// switch case
export const switchCase = cases => defaultCase => key => executeIfFunction(
  Object.prototype.hasOwnProperty.call(cases, key) ? cases[key] : defaultCase
);

// --------- TIMERS
// Timeout
export const delay = (millisecons, func) => {
  const id = setTimeout(func, millisecons);
  return () => clearTimeout(id);
};
// Interval
export const interval = (millisecons, func) => {
  const id = setInterval(func, millisecons);
  return () => clearInterval(id);
};

// ---------- PARSERS
// value to number
export const numberParser = value => (Number.isNaN(Number(value)) ? value : Number(value));
// object keys to number
export const mapToNumber = object => Object.entries(object).reduce(
  (acc, current) => ({ ...acc, [current[0]]: numberParser(current[1]) }),
  {}
);

export const arrayToObject = (acc, current) => ({ ...acc, [current[0]]: numberParser(current[1]) });

// map form inputs with name and values to object
export const serialezeForm = formElement => [...formElement]
  .filter(element => (element.value && element.name))
  .map(input => [input.name, input.value])
  .reduce(arrayToObject, {});

// Try Catch
export const tryCatch = (attempt) => {
  if (typeof attempt !== 'function') {
    throw new Error('tryCatch: the parameters must be of function type');
  }
  try {
    const res = attempt();
    return Result.Ok(res);
  } catch (e) {
    return Result.Err(e);
  }
};

// Match Media
export const match = media => window.matchMedia(media).matches;
