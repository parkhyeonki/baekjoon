/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

function solution() {
  let input = require("fs")
    .readFileSync("예제.txt")
    .toString()
    .trim()
    .split("\n")
    .map((val) => val.trim());

  let len = input.shift();

  console.log(input);
}

solution();

// const array = require("fs").readFileSync("예제.txt").toString().split("\n");

// const stack = [];
// const result = [];

// const len = array.shift();

// for (let i = 0; i < len; i++) {
//   switch (array[i]) {
//     case "pop":
//       result.push(stack.pop() || -1);
//       break;

//     case "size":
//       result.push(stack.length);
//       break;

//     case "empty":
//       result.push(stack[0] ? 0 : 1);
//       break;

//     case "top":
//       result.push(stack[stack.length - 1] || -1);
//       break;

//     default:
//       stack.push(array[i].split(" ")[1]);
//       break;
//   }
// }

// console.log(result.join("\n"));
// console.log(result);
