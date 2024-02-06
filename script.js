function narcissistic(value) {
  // Code me to return true or false

  let a = 0;
  let b = String(value);
  for (let i = 0; i < b.length; i++) {
    a += b[i] ** b.length;
  }
  console.log(a);
  if (value == a || (value < 10 && value > 0)) {
    return true;
  }
  return false;
}

console.log(narcissistic(153));
