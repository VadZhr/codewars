function sumStrings(a, b) {
  return String(
    BigInt(a && b ? BigInt(a) + BigInt(b) : a ? BigInt(a) : BigInt(b))
  );
}
console.log(
  sumStrings("712569312664357328695151392", "8100824045303269669937")
);
