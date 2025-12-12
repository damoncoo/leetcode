import Foundation

func reverseArray(_ nums: inout [Int]) {
    var left = 0
    var right = nums.count - 1

    while left < right {
        nums.swapAt(left, right)
        left += 1
        right -= 1
    }
}

func main() {
  var nums = [1, 2, 3, 4, 5]
  reverseArray(&nums)
  print(nums)
}

main()
