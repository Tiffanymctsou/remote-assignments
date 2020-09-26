// 2. findPosition: find the first position of the target number inside an array of numbers. The
// position should be counted starting from 0, if you can't find the target, please return -1

// I was happy when I found this method, but then realised that I have to use for-loop instead...
/* function findPosition(numbers, target) {
     return numbers.indexOf(target);
}
*/

function findPosition(numbers, target) {
    for (let i = 0; i <= numbers.length; i++) {
      let numInArray = numbers[i];
      if (numInArray === target) {
        return i;
      } else {
        return -1;
      }
    }
}

console.log(findPosition([5, 2, 7, 1, 6], 5) ); // should print 0
console.log(findPosition([5, 2, 7, 1, 6], 7) ); // should print 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7) ); // should print 2 (the first position)
console.log(findPosition([5, 2, 7, 1, 6], 8) ); // should print -1
