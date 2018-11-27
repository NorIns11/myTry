"use strict"
function quickSort(arr) {
  let length = arr.length;
  if (length <= 1) {
    return arr;
  }

  let middle = Math.floor(length / 2);
  var middleNum = arr.splice(middle, 1)[0];
  let left = [];
  let right = [];
  arr.forEach(each => {
    if(each < middleNum) {
      left.push(each);
    } else {
      right.push(each);
    }
  });
  return quickSort(left).concat([middleNum], quickSort(right));
}       

document.getElementById("quickSortBtn").onclick = function() {
  var data = document.getElementById("quickSortArr").value;
  var arr = data.split(',');
  arr = arr.map(each => parseFloat(each)); // 将字符转为数字，不然会比较字符对应的ASCII值，而非数值大小
  var result = quickSort(arr);
  document.getElementById("quickSortResult").innerText = result;
}