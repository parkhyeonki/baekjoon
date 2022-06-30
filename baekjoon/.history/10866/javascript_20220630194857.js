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
  .split("\n")
  .map((val) => val.trim());

class Deque {
  constructor() {
    this.arr = [];
    this.head = 0;
    this.tail = 0;
  }

  push_back(data) {
    this.arr[++this.tail] = data;
  }

  push_front(data) {
    if (this.arr[0]) {
    }
    this.arr[this.head++] = data;
  }

  pop_back() {
    if (this.tail >= this.head - 1) {
      return this.arr[this.tail--];
    }
  }

  pop_front() {
    if (this.head <= this.tail + 1) {
      return this.arr[--this.head];
    }
  }
}

let deque = new Deque();

deque.push_back(1);
deque.push_front(0);
console.log(deque.pop_back());
console.log(deque.pop_front());
deque.push_back(2);
deque.push_front(3);

console.log(deque.pop_back());
console.log(deque.pop_back());
console.log(deque.pop_back());

console.log(deque);

function solution() {}

solution();
