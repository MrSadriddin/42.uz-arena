// Tartiblangan kvadratlar
// Bo‘sh bo‘lmagan va o‘sish tartibida saralangan butun sonlar arrayini qabul qiluvchi funksiya yozing. Funksiya har bir sonning kvadratini hisoblablasin. Natija ham o‘sish tartibida qaytarilsin.

// Misol uchun
// array = [1, 2, 3, 5, 6, 8, 9]
// Kutilgan natija
// [1, 4, 9, 25, 36, 64, 81]
// 1-hint
// Garchi massivdagi sonlar o‘sish tartibida joylashgan bo‘lsa-da, ularning kvadratlari har doim ham o‘sish tartibida bo‘lmaydi, chunki manfiy sonlarning kvadrati ijobiy bo‘ladi.

// 2-hint
// Massiv bo‘yicha yurib, har bir elementning kvadratini hisoblang va yangi massivga yozing. So‘ng bu massivni saralang. Bu yondashuv ishlaydi, lekin optimal emas.

// 3-hint
// Saralashdan qochish uchun natija massivini to‘g‘ridan to‘g‘ri to‘ldirishga harakat qiling. Buning uchun har bir kvadrat qiymatni kerakli joyga joylashtirish kerak bo‘ladi.

// 4-hint
// Massivning boshi va oxiridan ikkita ko‘rsatkich oling. Eng kichik va eng katta qiymatlarning modullarini taqqoslang, ulardan kattasining kvadratini natijaviy massiv oxiriga qo‘ying. Ko‘rsatkichlarni mos ravishda siljiting va bu jarayonni natija to‘ldirilmaguncha davom ettiring.

function sortedSquaredArray(array) {
	let newArray = []
	for (let i = 0; i < array.length; i++) {
		newArray.push(array[i] * array[i])
	}
	let sortedArray = newArray.sort((a, b) => a - b)
	return sortedArray
}

const array = [-10, -5, 0, 5, 10]
const numss = sortedSquaredArray(array)
console.log(numss)
