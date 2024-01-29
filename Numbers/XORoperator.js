let a = "512";
let b = "512";

const getTrue = (a, b) => {
  let num = 1234567876543;
  for (let i = 0; i < num; i++) {
    if (a ^ i) {
      // if (a !== b) it will return false
      console.log(false, i);
    } else {
      // if (a === b) it will return true
      console.log(true, i);
    }
  }
};

getTrue(a, b);
