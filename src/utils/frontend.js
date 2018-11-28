export function getNewState(state, newState) {
  return Object.assign({}, state, newState);
}

export function infiniteScroll(element, offset = 100) {
  const { scrollTop, scrollHeight } = element;
  const clientHeight = document.documentElement.clientHeight || window.innerHeight;
  return (Math.ceil(scrollTop + clientHeight) >= scrollHeight - offset /* offset */);
}
export function infiniteScrollReverse(element, offset = 100) {
  const { scrollTop } = element;
  return (Math.ceil(scrollTop) <= offset);
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
}

export const arrayToObjectKeys = (data) => {
  const object = {};
  data.map((item) => { object[item.id] = item; });
  return object;
}
