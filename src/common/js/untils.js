/**
 * Created by varandrewchen on 28/02/2017.
 */

/**
 * 解析url参数
 * @example ?id=23333&a=b
 * @return Object {id:23333,a:b}
 */
export function urlParse() {
  let url = window.location.search;
  let obj = {};
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);
  if (arr) {
    arr.map((item) => {
      let temp = item.substring(1).split('=');
      let key = decodeURIComponent(temp[0]);
      let val = decodeURIComponent(temp[1]);
      obj[key] = val;
    });
  }
  return obj;
};
