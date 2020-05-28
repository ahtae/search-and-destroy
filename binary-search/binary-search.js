"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  const middleIndex = Math.floor(array.length / 2);
  let currentIndex = middleIndex;

  if (array.length === 0) {
    return false;
  } else if (array.length === 1 && array[0] === target) {
    return true;
  }

  if (target < array[currentIndex]) {
    for (let i = currentIndex; i >= 0; i--) {
      if (array[i] === target) {
        return true;
      }
    }
  } else {
    for (let i = currentIndex; i < array.length; i++) {
      if (array[i] === target) {
        return true;
      }
    }
  }

  return false;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
