/**
 * Given an array arr[] of non-negative integers and an integer sum, find a subarray that adds to a given sum.

Note: There may be more than one subarray with sum as the given sum, print first such subarray. 

Examples: 

Input: arr[] = {1, 4, 20, 3, 10, 5}, sum = 33
Output: Sum found between indexes 2 and 4
Explanation: Sum of elements between indices 2 and 4 is 20 + 3 + 10 = 33
 */
let arr = [1, 4, 20, 3, 10, 5],
  sum = 33;
const subArrayWithSum = (arr, sum) => {
  for (let i = 0; i < arr.length; i++) {
    let subArr = [],
      added = 0;
    for (let j = i; j < arr.length; j++) {
      subArr.push(arr[j]);
      added += arr[j];
      if (added === sum) {
        return subArr;
      }
    }
  }
};
console.log(subArrayWithSum(arr, sum));
