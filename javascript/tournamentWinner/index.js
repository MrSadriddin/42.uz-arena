// Musobaqa g'olibi
// Algoritmik musobaqada jamoalar round-robin usulida o‘ynashadi — har jamoa boshqalari bilan bir martadan bellashadi.

// Har bir o‘yinda faqat bitta g‘olib bo‘ladi: uy jamoasi g‘alaba qozonsa 1, mehmon jamoasi yutsa 0 bilan belgilanadi.

// Sizga competitions va results nomli ikkita array beriladi. competitions o‘yinda ishtirok etgan jamoalarni, results esa har bir o‘yin natijasini bildiradi. G‘olib 3 ball oladi, mag‘lub esa 0 ball. Natijada eng ko‘p ball to‘plagan jamoa musobaqa g‘olibi bo‘ladi.

// 💡 Eslatma: musobaqada kamida ikkita jamoa qatnashadi.

// Misol uchun
// competitions = [
//   ["HTML", "C#"],
//   ["C#", "Python"],
//   ["Python", "HTML"],
// ]
// results = [0, 0, 1]
// Kutilgan natija
// "Python"
// Tushuntirish:  C# — HTML ni yengdi, Python — C# ni yengdi, Python — HTML ni ham yengdi.
//  HTML — 0 ball
//  C# — 3 ball
//  Python — 6 ball
// 1-hint
// Bu muammoni qo‘l bilan qanday hal qilardingiz? Avval har bir jamoa qancha ball olganini hisoblab chiqing, so‘ng eng ko‘p ball olgan jamoani toping.

// 2-hint
// Har bir jamoaning ballarini saqlash uchun lug‘atdan (hash table) foydalaning. Kalit sifatida jamoa nomi, qiymat sifatida esa to‘plangan ball bo‘ladi.

// 3-hint
// Har bir bellashuvni ko‘rib chiqing. G‘olib bo‘lgan jamoani aniqlang va uning ballini 3 taga oshiring. Agar jamoa lug‘atda mavjud bo‘lmasa, uni 3 ball bilan qo‘shing. Har doim eng ko‘p ball to‘plagan jamoani kuzatib boring va yakunda shu jamoani qaytaring.

function tournamentWinner(competitions, results) {
	const scores = {}
	let winnerTeam = ''
	let maxScore = 0

	for (let i = 0; i < competitions.length; i++) {
		const [home, away] = competitions[i]
		const winner = results[i] === 1 ? home : away

		scores[winner] = (scores[winner] || 0) + 3

		if (scores[winner] > maxScore) {
			maxScore = scores[winner]
			winnerTeam = winner
		}
	}

	return winnerTeam
}

const competitions = [
	['HTML', 'C#'],
	['C#', 'Python'],
	['Python', 'HTML'],
]
const results = [0, 0, 1]

console.log(tournamentWinner(competitions, results))
