/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .trim()
    .split("\n")
    .map((val) => val.trim());

  let [n, m] = input.splice(0, 1).join("").split(" ");
  let a = [];
  for (let i = 0; i < n; i++) {
    let x = input.splice(0, 1);
    a.push(x[0].split(" "));
  }

  let [h, k] = input.splice(0, 1).join("").split(" ");
  let b = [];
  for (let i = 0; i < h; i++) {
    let y = input.splice(0, 1);
    b.push(y[0].split(" "));
  }
  console.log(a, b);
}

solution();
