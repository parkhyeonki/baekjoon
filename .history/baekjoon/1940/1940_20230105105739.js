/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

let input = require("fs")
  .readFileSync("input.txt") //"/dev/stdin"
  .toString()
  .split("\n")
  .map((val) => val.trim());

function solution() {
  console.log(input);
  let n = +input.shift();
  let m = +input.shift();
  let nums = input
    .shift()
    .split(" ")
    .map((v) => +v);
  console.log(n, m, nums);
  for (let i = 0; i < nums.length - 1; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (i + j === m) result++;
    }
  }
}

solution();
