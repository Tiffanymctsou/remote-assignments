// 1. max: find the max value of an array of numbers

function max(numbers) {
  let numMax = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numMax) {
      numMax = numbers[i];
    }
  } return numMax;
}

console.log(max([1, 2, 4, 5])); // should print 5
console.log(max([5, 2, 7, 1, 6])); // should print 7
