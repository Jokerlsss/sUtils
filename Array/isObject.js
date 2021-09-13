/**
 * @description 校验是否是对象（包括数组类型，暂不考虑函数类型，因为函数不会作为参数传入）
 * @param {Object} o 需要校验的对象
 * @returns Boolean
 */
export function isObject(o){
  return typeof o === 'object' && o!==null
}