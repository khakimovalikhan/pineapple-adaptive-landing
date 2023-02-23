function sumArr(arr) {
	let sum = 0
	for (let num of arr) {
		sum = sum + num
	}
	return sum
}

function isNumber(num) {
	return typeof num === 'number'
}
const result = sumArr([1, 2, 3])
console.log(result)
