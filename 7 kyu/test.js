function oddOccurrences(str) {
  // Array with all the values from the input as lowercase
  const itemsLower = str.split(' ')
    .map(item => item.toLowerCase());

  // Ignores the repeatable items (php, php, php)
  const oddItems = new Set();

  itemsLower.forEach(elem => {
    let counter = 0;

    itemsLower.forEach(elemToCheck => {
      if (elemToCheck === elem) {
        counter++;  // counts the occurrences
      }
    });

    if (counter % 2 !== 0) {
      oddItems.add(elem);
    }
  });

  console.log(Array.from(oddItems).join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');