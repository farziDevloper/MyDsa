/*
Given a sorted array arr[] and a number x, write a function that counts the occurrences of x in arr[]. Expected time complexity is O(Logn) 

Examples: 

  Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 2
  Output: 4 // x (or 2) occurs 4 times in arr[]

  Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 3
  Output: 1 

  Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 1
  Output: 2 

  Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 4
  Output: -1 // 4 doesn't occur in arr[] 
*/

let arr = [1, 1, 2, 2, 2, 3];
let k = 2;

const countOccurance = (arr, k) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      count++;
    }
  }
  return count;
};
console.log(countOccurance(arr, k));
