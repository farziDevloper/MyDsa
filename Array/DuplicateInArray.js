let arr = [10, 22, 3, 4, 222, 3, 5, 5, 2, 3, 5, 32, 4, 2, 4, 5, 6, 62, 4, 1];

const find = (arr) => {
  let left = 0,
    right = 1;
  while (left < right) {
    if (arr[left] == arr[right]) {
      return true;
    } else {
      left++;
    }
  }
};
console.log(find(arr));
console.log(arr);
