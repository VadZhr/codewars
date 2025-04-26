function ipsBetween(start, end) {
  //TODO
  const startBytes = start.split(".").map(Number);
  const endBytes = end.split(".").map(Number);

  console.log(startBytes);
  console.log(endBytes);

  return endBytes.reduce(
    (sum, byte, i) =>
      byte === startBytes[i]
        ? sum
        : sum + (byte - startBytes[i]) * 256 ** (3 - i),
    0
  );
}

console.log(ipsBetween("20.0.0.10", "20.0.1.0"));
