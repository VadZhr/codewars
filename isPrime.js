function isPrime(num) {
  //TODO
  if (num <= 0 || num == 1) {
    return false;
  }
  for (let i = 2; i <= ((num ** 0.5) | 0); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(2));
