// 1. count: return an object which shows the count of each characters.

function count(input) {
  let results = {};
  for (let i = 0; i < input.length; i++) {
    if (!results.hasOwnProperty(input[i])) {
      results[input[i]] = 1;
    } else {
      results[input[i]] ++;
    }
  } return results
}


let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'x'];
console.log(count(input1)); // should print {'a':3, 'b':1, 'c':2, ‘x':1}






// function count(input) {
//   let results =
//   for (let key in data.result) {
//     for (let i = 0; i < input.length; i++) {
//       if (input[i] === data.result.includes(input[i])) {
//         data.result.times +=1;
//       } else {
//         result.push({input[i], })
//       }
//     } return ;
//   }
// }

// {size:
// result: [
//   {
//   alp: 'a'
//   time: 3},
//   {alp: 'b'
//   time: 1},
//   ...
//
// ]
