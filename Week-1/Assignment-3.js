function countAandB(input) {
  var count = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i] == 'a' || input[i] == 'b') {
      count++;
    }
  } return count
}

// function toNumber(input) {
//   var letters = [];
//   for (var i = 0; i < input.length; i++) {
//     letters += parseInt(input[i], 36) - 9;
//     var answer = letters.split('').map(Number); //spilt element and convert into numbers
//   }
//   return answer
// }

function toNumber(input) {
  let letters = [];
  for(let i = 0; i < input.length; i++) {
    let num = input[i].charCodeAt(0) - 96;
    letters.push(num);
  } return letters;
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1)); // should print 4
console.log(toNumber(input1)) // should print [1, 2, 3, 1, 3, 1, 3]

let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]
