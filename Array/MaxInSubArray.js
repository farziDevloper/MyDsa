/**
 * Given an integer array nums, find the 
 * subarray
 * with the largest sum, and return its sum.
 * 
 * Example 1:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * 
 * Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 * 
 * 

Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 */

let arr = [5, 4, -1, 7, 8];
const MaxInSubArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let sub = [],
      max = 0,
      max2 = 0;
    for (let j = i; j < arr.length; j++) {
      max += arr[j];
      if (max2 < max) {
        max2 = max;
      }
    }
    return max2;
  }
};
console.log(MaxInSubArray(arr));
// MaxInSubArray(arr);
