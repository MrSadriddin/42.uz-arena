// Paskal uchburchagi
// Paskal uchburchagining dastlabki n ta qatorini toping.

// 💡 Paskal uchburchagi har bir element o'zidan yuqoridagi 2 ta element yig'indisiga teng.

// Misol 1:
// Kiritish: 2
// Natija: [[1], [1,1]]
// Misol 2:
// Kiritish: 5
// Natija: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

function generate(n) {
	const result = []

	for (let row = 0; row < n; row++) {
		const current = []

		for (let col = 0; col <= row; col++) {
			if (col === 0 || col === row) {
				current.push(1)
			} else {
				current.push(result[row - 1][col - 1] + result[row - 1][col])
			}
		}

		result.push(current)
	}

	return result
}

const n = 5
console.log(generate(n))
