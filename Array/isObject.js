/**
 * @description 校验是否是对象（包括数组类型，暂不考虑函数类型，因为函数不会作为参数传入）
 * @param {Object} o 需要校验的对象
 * @returns Boolean
 */
function isObject(o){
  return typeof o === 'object' && o!==null
}

/**
 * 使用示例
 */
const number = 1
const obj = {
	name: 'Mike'
}
const arr = [1,2,3]

console.log('isObject number:',isObject(number)); // false
console.log('isObject obj:',isObject(obj)); // true
console.log('isObject arr:',isObject(arr)); // true

