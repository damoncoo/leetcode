/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  for (let j = 0; j < nums.length - 1; j++) {
    if (nums[j] === nums[j + 1]) {
      return true;
    }
  }
};

console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 6]));

module.exports = {
  containsDuplicate,
};
