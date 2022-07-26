function getDivisorsCnt(n) {
  const divisors = [];
  let counter = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
      counter++;
    }
  }

  console.log(`${n} --> ${counter} (${divisors.join(', ')})`); 
}

getDivisorsCnt(4);
getDivisorsCnt(5);
getDivisorsCnt(12);
getDivisorsCnt(30);
getDivisorsCnt(1);