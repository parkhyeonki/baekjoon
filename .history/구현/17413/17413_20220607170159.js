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

  let ret = "";
  input = input.join("").split("");

  if (input[0] === "<") {
    while (input.includes("<")) {
      ret += input.splice(input.indexOf("<"), input.indexOf(">") + 1);
    }
    console.log(input);
    input = input.reverse().join("");
    ret = ret.split("");
    ret.splice(ret.indexOf(">") + 1, 0, input);
    // console.log(ret.join("").split(",").join(""));
  } else {
    input = input.join("").split(" ");
    let ans = [];
    for (let i = 0; i < input.length; i++) {
      let temp = input[i].split("").reverse().join("");
      ans.push(temp);
    }
    console.log(ans.join(" "));
  }
}

solution();
