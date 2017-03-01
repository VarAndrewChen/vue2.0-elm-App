/**
 * Created by varandrewchen on 28/02/2017.
 */
export function save2Local(id, key, val) {
  let seller = window.localStorage.__seller__;
  if (!seller) {
    seller = {};
    seller[id] = {};
  } else {
    seller = JSON.parse(seller);
    if (!seller[id]) {
      seller[id] = {};
    }
  }
  seller[id][key] = val;
  window.localStorage.__seller__ = JSON.stringify(seller);
}
export function loadFromLocal(id, key, def) {
  let seller = window.localStorage.__seller__;
  if (!seller) return def;
  seller = JSON.parse(seller)[id];
  if (!seller) return def;
  let res = seller[key];
  return res || def;
}
