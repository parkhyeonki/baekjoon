/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

let nums = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => parseInt(i));
function solution() {
  let arr;
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (nums.reduce((sum, item) => sum + item, 0) === nums[i] + nums[j] + 100) {
        arr = nums.filter((item) => item !== nums[i] && item !== nums[j]);
        break;
      }
    }
    if (!!arr) break;
  }
  arr.sort((a, b) => a - b);
  for (let i = 0; i < 7; i++) console.log(arr[i]);
}

solution();
