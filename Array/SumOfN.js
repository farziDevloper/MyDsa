const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const checkSumOfN = () => {
    let sum = 0
    rl.question('enter different numbers using spaces > > > ' , async numbers => {
        let arr = numbers.trim().split(" ").map(Number);
        for(let i = 0;i<arr;i++){
        sum = sum + arr[i]
        }
        console.log(`The Sum of the Numbers is ${sum}`)
        rl.close();
    } )
}
checkSumOfN()