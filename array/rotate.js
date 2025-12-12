const { reverseArray } = require("./reverse");

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotateArray(arr, k) {
  k = k % arr.length;
  reverseArray(arr, 0, arr.length - 1);
  reverseArray(arr, 0, k - 1);
  reverseArray(arr, k, arr.length - 1);
  return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));

module.exports = {
  rotateArray,
};
