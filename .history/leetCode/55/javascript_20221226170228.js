let input = require("fs")
  .readFileSync("input.txt") //"/dev/stdin"
  .toString()
  .split(",")
  .map((val) => val.trim());

function solution(input) {
  //input
  //Submit
  console.log(input);
}

solution(input);
