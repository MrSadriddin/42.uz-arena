// Nollarni orqaga surish
// Berilgan sonlar ro'yxatidagi nollarni ro'yxat orqasiga o'tkazing, lekin boshqa elementlar ketma-ketligi buzilmasin.

// Imkon qadar kamroq amal bajaring.

// Qo'shimcha xotiradan foydalanmang - amallarni ro'yxat ustida bajaring.

// Misol 1:
// Kiritish: nums = [0,1,0,3,12]
// Natija: [1, 3, 12, 0, 0]
// Misol 1:
// Kiritish: nums = [0]
// Natija: [0]

function moveZeroes(nums) {
	let noNull = 0
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			;[nums[noNull], nums[i]] = [nums[i], nums[noNull]]
			noNull++
		}
	}
	return nums
}

nums = [0, 1, 0, 3, 12]
const console1 = moveZeroes(nums)
console.log(console1)
