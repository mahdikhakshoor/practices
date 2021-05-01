function logPrimeNumbers(minimumNumber, maximumNumber) {
  for (let i = minimumNumber; i <= maximumNumber; i++) {
    const isNumberPrime = isPrime(i);
    if (isNumberPrime) {
      console.log(i);
    }
  }
}
function isPrime(number) {
  let prime = true;

  for (let j = 2; j < number; j++) {
    if (number % j === 0) {
      prime = false;
    }
  }
  return prime;
}
logPrimeNumbers(190, 200);
// console.log(isPrime(6));
