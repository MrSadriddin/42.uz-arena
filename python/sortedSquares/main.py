# Ro'yxat kvadrati
# Sizga berilgan sonlar ro'yxati o'sish tartibida saralangan. Har bir elementning kvadratini hisoblab, natijani saralangan holda qaytaring.

# Misol 1:
# Kiritish: nums = [-4,-1,0,3,10]
# Natija: [0,1,9,16,100]
# Misol 2:
# Kiritish: nums = [-7,-3,2,3,11]
# Natija: [4,9,9,49,121]

def sortedSquares(nums):
	newSortedArray = []
	for i in range(len(nums)):
		newSortedArray.append(nums[i] * nums[i])
	newSortedArray.sort()
	return newSortedArray

nums = [-4, -1, 0, 3, 10]
print(sortedSquares(nums))
