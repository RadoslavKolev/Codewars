/* #Reducing by rules to get the result

  Your task is to reduce a list of numbers to one number.
  For this you get a list of rules, how you have to reduce the numbers.
  You have to use these rules consecutively. So when you get to the end of the list of rules, you start again at the beginning.

  An example is clearer than more words...

  numbers: [ 2.0, 2.0, 3.0, 4.0 ]
  rules: [ (a,b) => a + b, (a,b) => a - b ]
  result: 5.0

  You get a list of four numbers.
  There are two rules. First rule says: Sum the two numbers a and b. Second rule says: Subtract b from a.

  The steps in progressing:
  1. Rule 1: First number + second number -> 2.0 + 2.0 = 4.0
  2. Rule 2: result from step before - third number -> 4.0 - 3.0 = 1.0
  3. Rule 1: result from step before + forth number -> 1.0 + 4.0 = 5.0

  Both lists/arrays are never null and will always contain valid elements.
  The list of numbers will always contain more than 1 numbers.
  In the list of numbers will only be values greater than 0.
  Every rule takes always two input parameter.

  Have fun coding it and please don't forget to vote and rank this kata! :-)

  I have also created other katas. Take a look if you enjoyed this kata! 
*/

function reduceByRules(numbers, rules) {
  // counter for the rules functions
  let counter = 0;
  let result = 0;

  // While the length of the array is higher than 1 (not 0 because infinite)
  while (numbers.length > 1) {
    // We take the first 2 indexes
    let first = Number(numbers.shift());
    let second = Number(numbers.shift());

    // The index decides which function to call (0, 1, 0, 1) (1 % 2 === 1 || 2 % 2 === 0)
    let index = counter % rules.length;

    // We call the specific index function and save its result
    result = rules[index](first, second);

    // Then we push the result in the beginning of the array
    // So we can take it again with the next value
    numbers.unshift(result);

    // Increment the counter for the next function
    counter++;
  }

  console.log(result);
}

console.log('\n----------------------------Test 1---------------------------\n');

const rules1 = [
  (a, b) => a + b,
  (a, b) => a - b
];

reduceByRules([2.0, 2.0, 3.0, 4.0], rules1);
// Result: 5.0

console.log('\n----------------------------Test 2---------------------------\n');

const rules2 = [
  (a, b) => Math.min(a, b),
  (a, b) => Math.max(a, b)
];

reduceByRules([1.3, 2.0, 3.3], rules2);
// Result: 3.3