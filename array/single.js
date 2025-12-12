/**
 * @param {number[]} nums
 * @return {number}
 */

/*
^= 这个运算符叫做 “按位异或赋值运算符”（bitwise XOR assignment operator）。

具体解释：

组成
^ 是按位异或运算符（XOR operator）

= 是赋值运算符

组合起来 ^= 就是先执行异或运算，然后将结果赋值给左边的变量

等价写法

result ^= num
# 等价于：
result = result ^ num
按位异或 (XOR) 的工作原理
对于两个数的二进制表示：

相同位异或得 0：0 ^ 0 = 0，1 ^ 1 = 0

不同位异或得 1：0 ^ 1 = 1，1 ^ 0 = 1

例如：


5 ^ 3  # 二进制：0101 ^ 0011 = 0110，即十进制 6
*/

var singleNumber = function (nums) {
  let result = 0;
  for (let n of nums) {
    result ^= n;
  }
  return result;
};

module.exports = {
  singleNumber,
};

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2, 6, 4])); // 4
console.log(singleNumber([1]));
