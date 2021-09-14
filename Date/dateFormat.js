/**
 * @param {Date} date 需要格式化的日期
 * @param {String} format 要转换的格式
 */
function dateFormat(date, format) {
	// 传入参数不是日期类型时，直接抛出错误
	if (!(date instanceof Date)) {
		throw Error('Invalid date format, please enter a Date type')
		return
	}
	let res = ''
	const year = date.getFullYear()
	const month = addZero(date.getMonth() + 1)
	const day = addZero(date.getDate())
	const H = addZero(date.getHours())
	const m = addZero(date.getMinutes())
	const s = addZero(date.getSeconds())

	try {
		switch (format) {
			case 'yyyy':
				res = year
				break
			case 'yyyy-MM':
				res = year + '-' + month
				break
			case 'yyyy-MM-dd':
				res = year + '-' + month + '-' + day
				break
			case 'yyyy-MM-dd HH':
				res = year + '-' + month + '-' + day + ' ' + H
				break
			case 'yyyy-MM-dd HH:mm':
				res = year + '-' + month + '-' + day + ' ' + H + ':' + m
				break
			case 'yyyy-MM-dd HH:mm:ss':
				res = year + '-' + month + '-' + day + ' ' + H + ':' + m + ':' + s
				break
			default:
				throw Error
		}
	} catch (e) {
		throw Error('Invalid the second params, please check')
	}
	return res
}

/**
 * @description 对小于 10 的数补 0，如 2021-9-14 -> 2021-09-14
 * @return {String} 补完 0 的字符串
 * @param {Object} value 需要补 0 的值
 */
function addZero(value) {
	if (typeof value !== 'number' && typeof value !== 'string') {
		return value
	}
	if (Number(value) < 10) {
		return '0' + value
	}
	return value.toString()
}

/**
 * 使用示例
 */
// const date = new Date()
// console.log(dateFormat(date, 'yyyy-MM-dd')) // 2021-09-14

export {
	dateFormat
}