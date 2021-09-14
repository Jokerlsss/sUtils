import { dateFormat } from './dateFormat.js'
/**
 * @description 在一个日期加上 n 天得到新的日期
 * @param {Date} date 日期类型
 * @param {Number} number 要加减的天数，支持正负整数
 * @return {String} 格式化后的日期类型
 * @tip 
 */
function dateAddDay(date, number){
	// 一天的时间戳
	const dayTimeStamp = 86400000
	// 当前日期的时间戳
	let dateTimeStamp = date.getTime()
	
	// 时间戳计算，并转为日期格式
	let newDate = new Date(dateTimeStamp + dayTimeStamp * number)
	return dateFormat(newDate, 'yyyy-MM-dd')
}

/**
 * 使用示例
 */
const n = 2
const date = new Date('2021-09-14')
console.log(dateAddDay(date, n))  // 2021-09-16