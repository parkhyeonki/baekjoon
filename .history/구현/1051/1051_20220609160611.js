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

  //input
  let [n, m] = input.splice(0, 1)[0].split(" ");
  let square = [];
  for (let i = 0; i < n; i++) {
    square.push(input[i].split("").map((v) => +v));
  }
  let min = Math.min(n, m);

  let ans = 1;
  for (let size = 2; size <= min; size++) {
    for (let i = 0; i <= n - size; i++) {
      let end = size - 1;
      for (let j = 0; j <= m - size; j++) {
        let tmp = square[i][j];
        if (square[i][j + end] === tmp && square[i + end][j] === tmp && square[i + end][j + end] === tmp) {
          ans = size;
          console.log(tmp);
          break;
        }
      }
    }
  }

  console.log(ans * ans);
}

solution();
