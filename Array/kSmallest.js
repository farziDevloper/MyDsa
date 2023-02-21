/*
Given an array and a number K where K is smaller than the size of the array. 
Find the K’th smallest element in the given array. 
Given that all array elements are distinct.

Examples:  
Input: arr[] = {7, 10, 4, 3, 20, 15}, K = 3 
Output: 7

Input: arr[] = {7, 10, 4, 3, 20, 15}, K = 4 
Output: 10 
*/
let arr = [7, 10, 4, 3, 20, 15];
let k = 4;
const kSmallest = (arr, k) => {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    return arr[k - 1];
  }
};
console.log(kSmallest(arr, k));
