var countBits = function (n) {
  // Program Me
  let a = Math.abs(n).toString(2);
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] == 1) {
      count++;
    }
  }
  return count;
};
