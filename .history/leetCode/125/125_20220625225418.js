let input = require("fs")
  .readFileSync("input.txt") //"/dev/stdin"
  .toString()
  .split("\n")
  .map((val) => val.trim());

function solution(input) {
  //input
  let s = input[0];

  //Submit
  s = s
    .split("")
    .map((v) => v.toLowerCase())
    .join("");
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    let c = s.charCodeAt(i);
    if ((c >= 97 && c <= 122) || (c >= 48 && c <= 57)) arr.push(s[i]);
  }
  console.log(arr);

  let left = 0;
  let right = arr.length - 1;
  let check = true;
  while (left < right) {
    console.log(left, right, s);
    if (left === right) break;

    if (arr[left] !== arr[right]) {
      check = false;
      break;
    }

    left++;
    right--;
  }

  return 0;
}

solution(input);