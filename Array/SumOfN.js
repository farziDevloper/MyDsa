const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const checkSumOfN = () => {
    rl.question('enter different numbers using spaces > > > ' , async numbers => {
        let arr = numbers.trim().split(" ").map(Number);
        let sum = 0
        for(let i = 0;i<arr.length;i++){
            sum+=arr[i]
        }
        console.log(`The Sum of the Numbers is ${sum}`)
        rl.close();
    } )
}
checkSumOfN()