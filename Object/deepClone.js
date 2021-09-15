/**
 * @description 深拷贝
 * @param {Object} obj 用于拷贝的初始对象
 * @return {Object} 拷贝后新的对象
 */
function deepClone(obj) {
	// 1.判断是否为对象(或数组)，不是则直接返回
	if (typeof obj !== 'object' || obj == null) {
		return obj
	}
	// 2.初始化返回结果(可能为对象或数组)
	let res
	if (obj instanceof Array) {
		res = []
	} else {
		res = {}
	}

	// 3.递归拷贝
	for (let key in obj) {
		// 4.如果是自有属性才需要拷贝，原型链上的属性不管
		if (obj.hasOwnProperty(key)) {
			res[key] = deepClone(obj[key])
		}
	}
	return res
}

/**
 * 使用示例
 */
// 1. 对象
let oA = {
	name: 'Mike',
	address: {
		province: 'FuJian',
		city: 'FuZhou'
	}
}
let oB = deepClone(oA)
oB.address.city = 'XiaMen'
console.log(oA, oB); // a !== b; a.address.city !== b.address.city

// 2.数组同理
let arrA = [{
	name: 'mike',
	// ...
}]
let arrB = deepClone(arrA)
// ...省略演示
