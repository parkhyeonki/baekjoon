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
function solution(input) {
  let n = +input[0];

  let DP = new Array(n + 1).fill(0);
  DP[0] = 10000000000;
  DP[1] = 0;
  let i = 2;
  while (i <= n) {
    let dp1 = i % 3 ? i / 3 : 100000000;
    let dp2 = i % 2 ? i / 2 : 100000000;
    let dp3 = i - 1;
    DP[i] = Math.min(dp1 + 1, dp2 + 1, dp3 + 1);
    i++;
  }
  console.log(DP);
}

solution(input);
