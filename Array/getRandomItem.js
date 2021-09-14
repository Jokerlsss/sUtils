/**
 * @description 获取数组的随机一项
 * @param {Array} arr 用于随机的数组
 * @return {any} 数组的任一项
 */
function getRandomItem(arr) {
	if (!(arr instanceof Array)) {
		throw Error('Invalid params, please enter an Array type')
		return
	}
	
	const array = arr.slice()
	
	// floor: 向下取整
	let min = 0;
	let max = Math.floor(arr.length);
	
	// random 取值 [0 ~ 1] 的浮点数
	// 随机值 [min, max]，包含 min，不包含 max（因为 length 比 index 大 1，所以直接用 max 作为数组索引即可）
	let randomIndex = Math.floor(Math.random() * (max - min)) + min;
	
	return array[randomIndex]
}

/**
 * 使用示例
 */
const arrA = [1, 2, 3]
const arrB = [{
		name: 'Mike',
		age: 15
	},
	{
		name: 'John',
		age: 16
	}
]
console.log(getRandomItem(arrA))  // 1,2,3 中的一个随机值
console.log(getRandomItem(arrB))  // arrB 中的任一个对象

