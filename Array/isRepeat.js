/**
 * @description 判断一组数组对象中是否有重复的数据
 * @param {Array} data 数组对象，格式 [{x:y}]
 * @param {Array} colArr 判重复的属性依据
 * @return {Number} 重复数据的索引，无重复则为 -1
 */
function isRepeatMoreKey(data, colArr = []) {
	// 默认索引 -1
	let res = -1
	// 存放已遍历过且不重复的对象数据
	let checkData = []
	
	// 非数组 -> 数组
	if(!Array.isArray(colArr)){
		colArr = []
	}
	// 非数组 -> 数组
	if(!Array.isArray(data)){
		data = []
	}
	// 数据为空，直接返回 -1
	if(data.length === 0){
		return res
	}
	// 若属性数组为空，则默认判断所有属性
	if(colArr.length === 0){
		firstRow = data[0]
		colArr = Object.keys(firstRow)
	}
	// 复制一份新的数据，不影响原数组
	let tableData = data.slice()

	one:
		for (let [index, row] of data.entries()) {
			// 重复行的索引
			let repeatRow = -1

			two:
				for (let cRow of checkData) {
					// 默认数据重复，当有一个值不相同时，就改为不重复
					let ifRepeat = true

					three:
						for (let colName of colArr) {
							if (toNullString(row[colName]) !== toNullString(cRow[colName])) {
								ifRepeat = false
								break three
							}
						}
					if (ifRepeat) {
						repeatRow = index
						break two
					}
				}
			// 若无重复，则对 checkData 新增数据
			if (repeatRow < 0) {
				checkData.push({
					...row
				})
			} else {
				// 重复，则直接返回原数组的 index
				res = repeatRow
				break one
			}
		}
	return res
}

function toNullString(o) {
	if (o == null || o === '') {
		return ''
	}
	return o
}

/**
 * 使用示例
 */
const tableData = [{
	name: 'John',
	age: 16
}, {
	name: 'Mike',
	age: 16
}, {
	name: 'Mike',
	age: 16
}, {
	name: 'Wair',
	age: 20
}]

/**
 * 根据单个 key 判断重复
 * @param {Array} arr 需校验的数组
 * @param {String} key 需校验的属性
 * @return {Boolean} 是否重复
 */
function isRepeatSingleKey(arr, key) {
	var obj = {};
	for (let i = 0; i < arr.length; i++) {
		if (obj[arr[i][key]]) {
			return false;
		} else {
			// obj: { Mike: {...} }
			obj[arr[i][key]] = arr[i];
		}
	}
	return obj;
}

console.log(isRepeatSingleKey(tableData, 'name')) // false
console.log(isRepeatMoreKey(tableData, ['name','age'])) // 2
