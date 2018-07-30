import { isDefined } from "./is";

export function getNewState(state, newState) {
  return Object.assign({}, state, newState);
}

export function isFirstRender(items) {
  return (items && items.length === 0) || !isDefined(items);
}

export function infiniteScroll(element, offset = 100){
  let scrollTop = element.scrollTop;
  let scrollHeight = element.scrollHeight;
  let clientHeight = document.documentElement.clientHeight || window.innerHeight;
  return(Math.ceil(scrollTop + clientHeight) >= scrollHeight - offset /* offset */);
}

export function copyToClipboard(str) {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-99999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};
