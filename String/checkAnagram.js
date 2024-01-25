/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

 */

let s = "rat",
  t = "car";

const convertToNewMap = (inputArray) => {
  console.log("function called", typeof inputArray);
  const resultMap = inputArray.reduce((map, value, index) => {
    // Using the index as the key for the Map
    map.set(index, value);
    return map;
  }, new Map());

  console.log(resultMap);
};

const checkAnagram = (s, t) => {
  let first = convertToAsciiValue(s);
  let sortedFirst = bubbleSort(first).split(" ").map(Number);
  let firstValue = convertFromAsciiValueToCharacter(sortedFirst);
  let second = convertToAsciiValue(t);
  let sortedSecond = bubbleSort(second).split(" ").map(Number);
  let secondValue = convertFromAsciiValueToCharacter(sortedSecond);

  if (firstValue.length != secondValue.length) {
    return false;
  }
  if (firstValue === secondValue) {
    return true;
  }
  if (firstValue !== secondValue) {
    return false;
  }
};

const convertToAsciiValue = (s) => {
  let str = [];
  for (let i = 0; i < s.length; i++) {
    str.push(s[i].charCodeAt(s[i]));
  }

  return str;
};

const convertFromAsciiValueToCharacter = (s) => {
  let str = [];
  for (let i = 0; i < s.length; i++) {
    str += String.fromCharCode(s[i]);
  }
  return str;
};

const bubbleSort = (arr) => {
  do {
    var isFinished = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isFinished = true;
      }
    }
  } while (isFinished);
  return arr.join(" ");
};
// console.log(checkAnagram(s, t));

// returnFromCharCode = () => {
//   let newStr = "";

// };

let d = new Map();
d.set(s);
// console.log("d>>>>", d);

const anagramChecker = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  return s.split("").sort().join("") === t.split("").sort().join("");
};
console.log(anagramChecker(s, t));
