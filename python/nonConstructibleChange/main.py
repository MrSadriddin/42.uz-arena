# Yasab bo‘lmaydigan eng kichik summa
# Sizga tanga qiymatlari berilgan. Ushbu tangalar yordamida hosil qilib bo‘lmaydigan eng kichik summani qaytaradigan funksiya yozing.

# Masalan, coins = [1, 2, 5] bo‘lsa, javob 4.

# Misol uchun
# coins = [5, 7, 1, 1, 2, 3, 22]
# Kutilgan natija
# 20
# 1-hint
# Bu masalani hal qilishning bir usuli — 1 dan boshlab barcha qiymatlarni yaratib bo‘ladimi-yo‘qmi deb tekshirib chiqish. Bu usul ishlaydi, ammo bundan samaraliroq usul mavjud.

# 2-hint
# Avvalo massivni o‘sish tartibida saralab oling. Sababi siz eng kichik yaratib bo‘lmaydigan summani qidirayapsiz, shuning uchun kichik tangalardan boshlash mantiqan to‘g‘ri.

# 3-hint
# Quyidagi misolni ko‘rib chiqing: coins = [1, 2, 4]. Bu tangalar bilan siz 1, 2, 3, 4, 5, 6, 7 summalarni yaratishingiz mumkin. Agar bu to‘plamga 9 qiymatli tanga qo‘shsangiz, siz 8 summani yaratolmaysiz. Ammo agar 7 qiymatli tanga qo‘shsangiz, 8 summani ham yaratish mumkin bo‘ladi va siz 1 dan 15 gacha bo‘lgan barcha qiymatlarni yaratishingiz mumkin bo‘ladi. Nega aynan shunday bo‘ladi?

# 4-hint
# Yaratish mumkin bo‘lgan maksimal summani saqlovchi currentChange degan o‘zgaruvchi yarating. Tangalarni saralab chiqing va har bir tangani ko‘rib chiqing:

# Agar joriy tanga qiymati currentChange + 1 dan katta bo‘lsa — siz aynan currentChange + 1 summani yaratib bo‘lmaydi degan xulosaga kelasiz va uni qaytarasiz.
# Agar tanga qiymati currentChange + 1 dan kichik yoki teng bo‘lsa — uni currentChange ga qo‘shib davom etasiz.
# Bu yondashuv ishlaydi, chunki siz hozirgi summaga yangi tangani qo‘shib, yangi oraliqdagi barcha summalarni ham yaratishingiz mumkin bo‘ladi. Masalan, sizda [1, 2] bo‘lsa, siz 1, 2, 3 ni yaratishingiz mumkin. Endi sizga 4 tanga qo‘shilsa, siz 4 + 1, 4 + 2, 4 + 3 summalarni ham yaratishingiz mumkin bo‘ladi. Ya’ni 7 gacha bo‘lgan barcha summalarni.

def nonConstructibleChange(coins):
	coins.sort()
	currentChange = 0
	for i in range(len(coins)):
		if coins[i] > currentChange + 1:
			return currentChange + 1
		currentChange += coins[i]
	return currentChange + 1
    

coins = [109, 2000, 8765, 19, 18, 17, 16, 8, 1, 1, 2, 4]
print(nonConstructibleChange(coins))
