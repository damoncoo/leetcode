function reverseArray(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5], 0, 4));

module.exports = {
  reverseArray,
};
