/* You will be given an array of numbers.

For each number in the array you will need to create an object.

The object key will be the number, as a string. The value will be the corresponding character code, as a string.

Return an array of the resulting objects.

All inputs will be arrays of numbers. All character codes are valid lower case letters. The input array will not be empty. */

function numbersToObjects(arr) {
  const result = [];

  arr = arr.map(num => String(num));

  arr.forEach(str => {
    let charCodeValue = String.fromCharCode(str);
    let currentObj = {};
    currentObj[str] = charCodeValue; 
    result.push(currentObj);
  });

  return result;
}

console.log(numbersToObjects([118, 117, 120]));
numbersToObjects([101, 121, 110, 113, 113, 103]);