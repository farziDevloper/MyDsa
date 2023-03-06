/**
 * Given an integer array nums, return an array answer such that answer[i]
 *  is equal to the product of all the elements of nums except nums[i].

* You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 */

let arr = [1, 2, 3, 4];

let a = [];
const Multiple = (arr) => {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
};
let stored = Multiple(arr);

const Call = (stored, arr) => {
  let a = [];
  for (let i = 0; i < arr.length; i++) {
    a.push(stored / arr[i]);
  }
  return a;
};
console.log(Call(stored, arr));
