/* 
  Create a function that returns the CSV representation of a two-dimensional numeric array.

  input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
  output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'
*/

function toCsvText(array) {
  return array.join('\n');
}

console.log('------------------------------Test 1------------------------------');
console.log(toCsvText([
  [0, 1, 2, 3, 45],
  [10, 11, 12, 13, 14],
  [20, 21, 22, 23, 24],
  [30, 31, 32, 33, 34]
]));

console.log('------------------------------Test 2------------------------------');
console.log(toCsvText([
  [-25, 21, 2, -33, 48],
  [30, 31, -32, 33, -34]
]));

console.log('------------------------------Test 3------------------------------');
console.log(toCsvText([
  [5, 55, 5, 5, 55],
  [6, 6, 66, 23, 24],
  [666, 31, 66, 33, 7]
]));