const { template } = require("@babel/core");

function minMedMax(n1, n2, n3) {
  let array = [n1, n2, n3];
  let a;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        a = array[i];
        array[i] = array[j];
        array[j] = a;
      }
    }
  }
  return { min: array[0], mid: array[1], max: array[2] };
}

module.exports = minMedMax;
