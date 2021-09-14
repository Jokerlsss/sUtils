/**
 * @description 防抖
 * @param {Function} fn 业务函数
 * @param {Number} delay 防抖延时，单位：毫秒
 */
function debounce(fn, delay=500){
	let timer = null
	return function(){
		if(timer){
			clearTimeout(timer)
		}
		timer = setTimeout(()=>{
			fn.apply(this, arguments)
			tiemr = null
		}, delay)
	}
}

/**
 * 使用示例
 */

// <input type="text" id="input"/>

const input = document.getElementById('input')
input.addEventListener('keyup', debounce(function(){
	console.log(input.value);
}, 600))