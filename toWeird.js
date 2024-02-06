function toWeirdCase(string) {
  //TODO
  return string
    .split(" ")
    .map((el, index) =>
      el
        .split("")
        .map((el, index) =>
          index % 2 == 0 ? el.toUpperCase() : el.toLowerCase()
        )
        .join("")
    )
    .join(" ");
}

console.log(toWeirdCase("ThIs Is A TeSt"));
