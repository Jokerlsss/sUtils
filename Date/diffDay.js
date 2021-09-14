/**
 * @description 计算两个日期之间相差天数（若不足一天，则向下取整）
 * @tip 支持的日期格式：xxxx/xx/xx  xxxx-xx-xx  xxxx.xx.xx
 */
function diffDay(startDate, endDate){
	if(!isDate(startDate) || !isDate(endDate)){
		return
	}
	// 起始日期时间戳 & 结束日期时间戳
	let sTimeStamp = new Date(startDate).getTime()
	let eTimeStamp = new Date(endDate).getTime()
	
	// 一天的时间戳，单位：毫秒
	const dayTimeStamp = 86400000
	
	// 两个日期相差的时间戳，正值
	const diffTimeStamp = Math.abs(eTimeStamp-sTimeStamp)
	
	// 相差天数，向下取整
	const res = Math.floor(diffTimeStamp/dayTimeStamp)
	
	return res
}

/**
 * @description 日期格式是否合格
 * @tip 支持的日期格式：xxxx/xx/xx  xxxx-xx-xx  xxxx.xx.xx
 */
function isDate(date){
	// xxxx/xx/xx
	let regA = /^\d+\/\d+\/\d+$/
	// xxxx-xx-xx
	let regB = /^\d+-\d+-\d+$/
	// xxxx.xx.xx
	let regC = /^\d+\.\d+\.\d+$/
	
	const isDate = regA.test(date) || regB.test(date) || regC.test(date)
	
	if(date.length !== 10 || !isDate){
		throw Error('Invalid date format')
		return false
	}
	return true
}

let dd1 = '2021-09-14'
let dd2 = '2021-09-19'
console.log(diffDay(dd1, dd2))