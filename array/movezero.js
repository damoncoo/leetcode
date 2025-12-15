/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let nonZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[nonZeroIndex]] = [nums[nonZeroIndex], nums[i]];
      nonZeroIndex++;
    }
  }
  return nums;
};

var moveZeroesFront = function (nums) {
  let nonZeroIndex = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] !== 0) {
      [nums[i], nums[nonZeroIndex]] = [nums[nonZeroIndex], nums[i]];
      nonZeroIndex--;
    }
  }
};

console.log(moveZeroes([0, 3, 0, 0, 0, 0, 5])); // [3,12,5,0,0,0,0]
