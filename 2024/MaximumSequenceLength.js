function maxSequenceLength(arr) {
  let maxSeq = [];
  let currentSeq = [];

  for (let i = 1; i < arr.length; i++) {
    if (i === 0 || arr[i] > arr[i - 1]) {
      currentSeq.push(arr[i]);
    } else {
      currentSeq = [arr[i]];
    }
    if (currentSeq.length > maxSeq.length) {
      maxSeq = [...currentSeq];
    }
  }

  return maxSeq;
}

const array = [5, 0, 1, 2, 3, 4, 1, 1];
console.log(maxSequenceLength(array)); // Output: [0, 1, 2, 3, 4]
