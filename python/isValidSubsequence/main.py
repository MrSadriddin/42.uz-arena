# // Ketma-ket qism
# // Ikkita butun sonlardan iborat array beriladi. Ikkinchi array birinchining ketma-ket qismi ekanini aniqlovchi funksiya yozing.

# // Ketma-ket qism — bu elementlari tartib bilan uchraydigan, lekin yonma-yon bo‘lishi shart bo‘lmagan qator.

# // Masalan, [1, 3, 4] sonlari [1, 2, 3, 4] arrayining ketma-ket qismi hisoblanadi, [2, 4] ham shunday. Shuningdek, bitta son yoki arrayning o‘zi ham ketma-ket qism bo‘lishi mumkin.

# // Misol uchun
# // array = [5, 1, 22, 25, 6, -1, 8, 10]
# // sequence = [1, 6, -1, 10]
# // Kutilgan natija
# // true
# // 1-hint
# // Ushbu masalani hal qilish uchun asosiy massiv bo‘ylab bir marta aylanish kifoya.

# // 2-hint
# // Asosiy massiv bo‘ylab yurib, kichik ketma-ketlikdagi birinchi elementni qidiring. Uni topganingizdan so‘ng, navbatdagisini izlang, toki barcha elementlarni topmaguningizcha yoki massiv oxiriga yetmaguningizcha davom eting.

# // 3-hint
# // Ikkinchi maslahatdagi yondashuvni amalga oshirish uchun sizga kichik ketma-ketlikdagi joriy pozitsiyani saqlovchi o‘zgaruvchi kerak bo‘ladi. Dastlab bu indeks 0 bo‘ladi va siz har gal kerakli sonni topsangiz, ushbu indeksni oshirib borasiz. Butun ketma-ketlik yakunigacha yetganingizda, natija rost (true) bo‘ladi.


def isValidSubsequence(array, sequence):
    seqIndex = 0
    for i in range(len(array)):
        if array[i] == sequence[seqIndex]:
            seqIndex+=1
        if seqIndex == len(sequence):
            return True
    return False

array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]
print1 = isValidSubsequence(array, sequence)
print(print1)
