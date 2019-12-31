export function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

export function isFunc(fn) {
  return typeof fn === 'function';
}

export function noop() { /* do nothing */ }
