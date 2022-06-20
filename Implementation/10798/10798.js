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
  .trim()
  .split("\n")
  .map((val) => val.trim());

function solution(input) {
  let answer = [];
  let len = 0;
  for (let a = 0; a < input.length; a++) {
    let tmp = input[a].length;
    len = Math.max(len, tmp);
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < input.length; j++) {
      answer.push(input[j][i]);
    }
  }

  console.log(answer.join(""));
}
solution(input);
