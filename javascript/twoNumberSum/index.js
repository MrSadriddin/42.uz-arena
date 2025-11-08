function twoNumberSum(array, targetSum) {
	const nums = {}
	for (let num of array) {
		const complement = targetSum - num
		if (nums[complement]) {
			return complement < num ? [complement, num] : [num, complement]
		}
		nums[num] = true
	}
	return []
}

array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10
const console1 = twoNumberSum(array, targetSum)
console.log(console1)
