# Paskal uchburchagi
# Paskal uchburchagining dastlabki n ta qatorini toping.

# 💡 Paskal uchburchagi har bir element o'zidan yuqoridagi 2 ta element yig'indisiga teng.

# Misol 1:
# Kiritish: 2
# Natija: [[1], [1,1]]
# Misol 2:
# Kiritish: 5
# Natija: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

def generate(n):
    result = []
    for row in range(n):
        current = []
        for col in range(row + 1):
            if col == 0 or col == row:
                current.append(1)
            else:
                current.append(result[row - 1][col - 1] + result[row - 1][col])
        result.append(current)
    return result

n = 5
print(generate(n))
