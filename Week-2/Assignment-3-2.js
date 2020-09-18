// 2. groupByKey: return an object which shows the summed up value of each keys.

// Note:
// 1. The input format is different for these two functions.
// 2. In the second function, the input may have same key but different values,
// the output should have each key only once.

/*
<-- Attempt 1: Value failed to add -->
function groupByKey(input) {
  let results = {};
  for (let i = 0; i < input.length; i++) {
    if (input[i].key !== results.hasOwnProperty(input[i].key)) {
      results[input[i].key] = input[i].value;
    } else {
      results[input[i].key] += input[i].value;
    }
  } return results; // { a: 3, b: 1, c: 5 }
}

<-- Attempt 2: results not as expected, could be optimised -->
(function groupByKey(input) {
  let results = {};
  for (let i in input) {
    let id = input[i].key;
    if(results[id]) {
      results[id].value = results[id].value + input[i].value;
      results[id].key = input[i].key;
    } else {
      results[id] = {};
      results[id].key = input[i].key;
      results[id].value = input[i].value;
    }
  } return results
}

<-- Attempt 3: forEach() does not return anything (undefined) -->
function groupByKey(input) {
  let results = {};
  input.forEach(sum => {
    if (results[sum.key]) {
      results[sum.key] += sum.value;
    } else {
      results[sum.key] = sum.value;
    }
  })
}
*/

function groupByKey(input) {
  let results = input.reduce((obj, current) => {
    if (!obj[current.key]) {
      obj[current.key] = 0
    }
    obj[current.key] += current.value
    return obj
  }, {})
  return results
}

let input2 = [
{key: 'a', value: 3},
{key: 'b', value: 1},
{key: 'c', value: 2},
{key: 'a', value: 3},
{key: 'c', value: 5}
]
console.log(groupByKey(input2)); // should print {'a':6, 'b':1, ‘c’:7}
