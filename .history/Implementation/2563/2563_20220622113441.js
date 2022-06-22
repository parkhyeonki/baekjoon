let input = require("fs")
  .readFileSync("input.txt") //"/dev/stdin"
  .toString()
  .split("\n")
  .map((val) => val.trim());

function solution(input) {
  let n = +input.shift();

  let arr = [];
  for (let i = 0; i < n; i++) {
    let temp = input
      .shift()
      .split(" ")
      .map((v) => +v);
    arr.push(temp);
  }

  let page = Array.from(Array(10), () => Array(10).fill(0));

  console.log(n, arr);
}

solution(input);
