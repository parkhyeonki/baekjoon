/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */
let input = require("fs").readFileSync("예제.txt").toString().trim().split("\n");
console.log(input.length);

// push pop size empty top
let testNum = input[0];
console.log(testNum);

let answer = [];
input.forEach((val) => {
  val.split(" ");
  answer.push(val);
});
console.log(answer);
