// Given a String S, reverse the string without reversing its individual words. Words are separated by dots.

let s = "i.like.this.program.very.much";

const reverseString = (s) => {
    let spl = s.trim().split(".");
    let str = ""
    for (var i = spl.length-1; i >= 0; i--) {
        str = str + spl[i] +" ";
    }
    let res =  str.trim().split(" ").join('.')

    return res

  };
  console.log(reverseString(s));

