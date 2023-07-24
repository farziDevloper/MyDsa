
const readline = require('readline');
// Create an interface for reading input from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




  const OddOrEven = async () => {
      // creating a function to check if a number is odd or even 

    rl.question('enter a number ' ,async (number) => {
      // this starts taking input from the terminal 

      let num = await parseInt(number)
      // here we convert  aNumber that is Sting to Number using parseInt method
      // but in this case we wont accept number with decimals but if provided we will round of 

        num % 2 === 0 ? 
        console.log(`the number ${num} is even`) 
        : 
        console.log(`the number ${num} is odd`);
      // use of turnery operator for even or odd

      rl.close();
       // this closes the terminal input taking process 
    })

    
  }

  OddOrEven()