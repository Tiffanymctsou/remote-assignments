// binary search (half-interval search)
function binarySearchPosition(numbers, target) {
  let startIndex = 0; // always 0
  let endIndex = numbers.length - 1;
  while (startIndex <= endIndex) {
    let midIndex = Math.floor((startIndex + endIndex) / 2); // round-down
    if (numbers[midIndex] === target) {
      return midIndex;
    } else if (target > numbers[midIndex]) {
        startIndex = midIndex + 1;
    } else if (target < numbers[midIndex]) {
        endIndex = midIndex - 1
    }
  }  return -1;
}

console.log(binarySearchPosition([1, 2, 5, 6, 7], 1) ); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3
