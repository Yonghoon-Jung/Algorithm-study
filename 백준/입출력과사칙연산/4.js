const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  console.log(`|\\_/|
|q p|   /}
( 0 )"""\\
|"^"\`    |
||_/=\\\\__|`);
}

solution();
