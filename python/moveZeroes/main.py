# Nollarni orqaga surish
# Berilgan sonlar ro'yxatidagi nollarni ro'yxat orqasiga o'tkazing, lekin boshqa elementlar ketma-ketligi buzilmasin.

# Imkon qadar kamroq amal bajaring.

# Qo'shimcha xotiradan foydalanmang - amallarni ro'yxat ustida bajaring.

# Misol 1:
# Kiritish: nums = [0,1,0,3,12]
# Natija: [1, 3, 12, 0, 0]
# Misol 1:
# Kiritish: nums = [0]
# Natija: [0]


def moveZeroes(nums):
    noNull = 0
    for i in range(len(nums)):
        if nums[i] != 0:
            [nums[noNull], nums[i]] = [nums[i], nums[noNull]]
            noNull+=1
    return nums

nums = [0, 1, 0, 3, 12]
print1 = moveZeroes(nums)
print(print1)
