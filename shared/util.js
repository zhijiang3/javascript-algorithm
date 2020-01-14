/**
 * @param {object} obj
 * @param {string} key
 * @return {boolean}
 */
export function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

/**
 * @param {any} fn
 * @return {boolean}
 */
export function isFunc(fn) {
  return typeof fn === "function";
}
