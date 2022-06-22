let input = require("fs")
  .readFileSync("input.txt") //"/dev/stdin"
  .toString()
  .split("\n")
  .map((val) => val.trim());

function solution(input) {
  let n = +input.shift();

  let arr = [];
  for (let i = 0; i < n; i++) {
    let temp = input
      .shift()
      .split(" ")
      .map((v) => +v);
    arr.push(temp);
  }

  let page = Array.from(Array(100), () => Array(100).fill(0));
  let cnt = 0;
  arr.forEach((v) => {
    let [n, m] = v;
    for (let i = m - 1; i < m + 10; i++) {
      for (let j = n - 1; j < n + 10; j++) {
        if (page[i][j] === 1) continue;
        page[i][j] = 1;
        cnt++;
      }
    }
  });
  console.log(cnt, page);
}

solution(input);
