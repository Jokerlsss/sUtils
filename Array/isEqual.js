/**
 * @description 比较两个对象或数组是否完全相等
 * @param {Object} o1 用于比较的对象1
 * @param {Object} o2 用于比较的对象2
 * @returns Boolean
 */
function isEqual(o1, o2) {
  // 判断参数为值类型
  if (!isObject(o1) || !isObject(o2)) {
    return o1 === o2
  }
  // 判断两个参数是否完全一样
  if (o1 === o2) {
    return true
  }
  // 判断 key 长度
  let o1Keys = Object.keys(o1)
  let o2Keys = Object.keys(o2)
  if (o1Keys.length !== o2Keys.length) {
    return false
  }
  // 递归深度遍历
  for (let key in o1) {
    let flag = isEqual(o1[key], o2[key])
    if (!flag) {
      return false
    }
  }
  return true
}

/**
 * @description 校验是否是对象（包括数组类型，暂不考虑函数类型，因为函数不会作为参数传入）
 * @param {Object} o 需要校验的对象
 * @returns Boolean
 */
function isObject(o) {
  return typeof o === 'object' && o !== null
}

/**
 * 使用示例一：对象
 */
const o1 = {
  name: 'Mike',
  age: 15,
  address: {
    province: 'FuJian',
    city: 'FuZhou',
  },
}
const o2 = {
  name: 'Mike',
  age: 15,
  address: {
    province: 'FuJian',
    city: 'FuZhou',
  },
}

console.log('isEqual示例一(对象)：', isEqual(o1, o2)) // true

/**
 * 使用示例二：数组
 */
const a1 = [1, 2, 3, { name: 'Mike', age: 16 }]
const a2 = [1, 2, 3, { name: 'Mike', age: 16 }]

console.log('isEqual示例二(数组)：', isEqual(a1, a2)) // true
