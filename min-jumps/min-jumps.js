'use strict';

// Complete this algo
const minJumps = arr => {
  let jumpCount = 0;

  if (arr.length === 0) {
    return jumpCount;
  } else {

  }

  // let currentValue = arr[0];
  // let jumpCount = 0;
  // let i = 0;
  // let maximumValue = Math.max(...arr.slice(i + 1, i + arr[i] + 1));
  // let maximumValueIndex = i + arr.slice(i, i + arr[i]).indexOf(maximumValue);

  // console.log(maximumValueIndex)
  // while (i < arr.length) {
  //   i += maximumValueIndex;
  //   ++jumpCount;
  //   maximumValue = Math.max(...arr.slice(i + 1, i + arr[i] + 1));
  //   maximumValueIndex = i + arr.slice(i, i + arr[i]).indexOf(maximumValue);
  // }

  // return jumpCount;
};

const getMaxValue = arr => {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

module.exports = minJumps

minJumps([2,4,1,1,2,3,7,1,1,3]);
