// Ikki Son Yig‘indisi
// Sizga butun sonlardan iborat array va targetSum beriladi. Arraydagi ikki turli son yig‘indisi targetSum'ga teng bo‘lsa, ularni o‘sish tartibida qaytaradigan funksiya yozing.

// Agar bunday juftlik bo‘lmasa, bo‘sh array qaytaring.

// 💡 Eslatma: Sonlar turli bo'lsin, bitta sondan ikki marta foydalanib bo‘lmaydi.

// Faqat bitta juftlik mavjud deb faraz qiling.

// Misol uchun
// array = [3, 5, -4, 8, 11, 1, -1, 6]
// targetSum = 10
// Kutilgan natija
// [-1, 11] // sonlar o‘sish tartibida
// 1-hint
// Har bir mumkin bo‘lgan juftlikni tekshirish uchun ikki ta for-loopdan foydalaning (ya’ni, har bir sonni qolganlari bilan qo‘shib ko‘ring). Ammo bu yondashuvning vaqt va xotira samaradorligi qanday bo‘ladi?
// 2-hint
// Har bir son X uchun, siz X + Y = targetSum tenglamani yechmoqdasiz. Bu yerda X sizda bor, targetSum ham ma'lum. Unda Y ni osongina topish mumkin.
// 3-hint
// Har bir sonni hash jadvalda (ya'ni dictionary/set) saqlab boring. Har bir X uchun kerakli Y = targetSum - X ni hisoblab, u hash jadvalda bor-yo‘qligini tekshirib ko‘ring. Bu yondashuv vaqt va xotira jihatdan qanday samarali?

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
