import Foundation

func containsDuplicate(_ nums: [Int]) -> Bool {
    let sortedNums = nums.sorted()
    let count = sortedNums.count

    for j in 0..<count - 1 {
        if sortedNums[j] == sortedNums[j + 1] {
            return true
        }
    }
    return false
}

let nums = [1, 2, 3, 1]
print(containsDuplicate(nums))
