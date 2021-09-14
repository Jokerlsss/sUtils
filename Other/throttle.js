/**
 * @description 节流
 * @param {Function} fn 业务函数
 * @param {Number} delay 节流延时，单位：毫秒
 */
function throttle(fn, delay = 100) {
	let timer = null
	return function() {
		if (timer) {
			return
		}
		timer = setTimeout(() => {
			fn.apply(this, arguments)
			timer = null
		}, delay)
	}
}

/**
 * 使用示例
 */

// <div id="dragDiv" draggable="true">
// 	可拖拽
// </div>
	
const div = document.getElementById('dragDiv')
div.addEventListener('drag', throttle((e) => {
	console.log(e.offsetX, e.offsetY);
}, 150))
