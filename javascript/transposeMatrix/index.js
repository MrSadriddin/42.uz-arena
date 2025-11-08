// Matritsani transponirlash
// Sizga butun sonlardan iborat matritsa beriladi. Matritsaning transponirlangan ko‘rinishini qaytaradigan funksiya yozing.

// Transponirlash - qator va ustun indekslari o‘rnini almashtirish.

// Matritsada kamida bitta qiymat bo‘ladi. Biroq, uning balandligi va kengligi bir xil bo‘lishi shart emas.

// Misol uchun
// matrix = [[1, 2]]
// Kutilgan natija
// [[1], [2]]
// Misol uchun
// matrix = [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]
// Kutilgan natija
// [
//   [1, 3, 5],
//   [2, 4, 6]
// ]
// Misol uchun
// matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// Kutilgan natija
// [
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9]
// ]
// 1-hint
// Har bir elementning qator va ustun indekslarini almashtirish kerak. Masalan, matrix[1][2] elementi transponirlangan matritsada matrix[2][1] bo‘ladi.

// 2-hint
// Har bir ustun transponirlangan matritsada qatorga aylanadi. Xuddi shuningdek, har bir qator yangi matritsada ustun bo‘ladi.

// 3-hint
// Har bir ustunni alohida ko‘rib chiqing va har bir ustundan yangi qator hosil qilib, uni transponirlangan matritsaga qo‘shing.

function transposeMatrix(matrix) {
	newArr = []
	for (let i = 0; i < matrix[0].length; i++) {
		const newRow = []
		for (let j = 0; j < matrix.length; j++) {
			newRow.push(matrix[j][i])
		}
		newArr.push(newRow)
	}
	return newArr
}

matrix = [
	[1, 2],
	[3, 4],
	[5, 6],
]
console.log(transposeMatrix(matrix))
