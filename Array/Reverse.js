/*
Given an array (or string), the task is to reverse the array/string.
Examples : 
Input  : arr[] = {1, 2, 3}
Output : arr[] = {3, 2, 1}

Input :  arr[] = {4, 5, 1, 2}
Output : arr[] = {2, 1, 5, 4}
*/

let arr = [1, 2, 3];
const ReverseAnArray = (arr) => {
  let array = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    array.push(arr[i]);
  }
  return array;
};
console.log(ReverseAnArray(arr));
