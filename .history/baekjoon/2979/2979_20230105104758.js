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
  const [a, b, c] = input
    .shift()
    .split(" ")
    .map((v) => +v);
  console.log(input);
  console.log(a, b, c);
  input = input.map((v) => v.split(" ").map((val) => +val));
  for (let i = 1; i <= 100; i++) {
    // 트럭 3개 확인 -> 더하기
  }
}

solution();