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
  let n = +input.splice(0, 1)[0];
  let arr = input
    .shift()
    .split(" ")
    .map((v) => +v);

  let m = +input.splice(0, 1)[0];

  console.log(n, arr);
}

function binarySearch(arr, low, high, target) {
  let mid = (low + high) / 2;

  if (low > high) return false;

  if (arr[mid] === target) return true;

  if (arr[mid] > target) {
    return binarySearch(arr, low, mid - 1, target);
  } else {
    return binarySearch(arr, mid + 1, high, target);
  }
}

solution();
