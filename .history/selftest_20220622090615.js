let arr1 = [1, 2, 3, 3, 3, 3, 4, 4];
let arr2 = [3, 2, 4, 4, 2, 5, 2, 5, 5];
let arr3 = [3, 5, 7, 9, 1];

function check(arr) {
  let tmp = arr.slice();
  let setArr = [...new Set(tmp)];

  console.log(tmp, setArr);
}

check(arr1);
