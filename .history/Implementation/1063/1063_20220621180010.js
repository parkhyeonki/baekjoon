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

  console.log(input);
  let alpabet = [0, "A", "B", "C", "D", "E", "F", "G", "H"];

  let [k, s, t] = input.shift().split(" ");

  let king = [+k[1], alpabet.indexOf(k[0])];
  let stone = [+s[1], alpabet.indexOf(s[0])];

  while (t--) {
    let cmd = input.shift();
    switch (cmd) {
      case "R":
        if (king[1] + 1 > 8) continue;
        if (king[1] + 1 === stone[1]) stone[1]++;
        king[1]++;
        break;
      case "L":
        if (king[1] - 1 < 1) continue;
        if (king[1] - 1 === stone[1] && stone[1] - 1 >= 1) stone[1]--;
        king[1]--;
        break;
    }
  }

  console.log(king, stone);
}

solution();
