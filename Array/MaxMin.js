

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



const findGreaterNumber = () => {
    
    rl.question('enter first Number    ' , async number => {
      let  [a,b] =  number.trim().split(" ").map(Number)
          console.log(a > b ? "First integer is greater ": "Second Integer is greater");
        rl.close();
    }
    )
};

findGreaterNumber()
