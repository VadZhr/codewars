
function rot13(str) {
  return str
    .split("")
    .map((el) =>
      (el.charCodeAt() >= 97 && el.charCodeAt() <= 122) ||
      (el.charCodeAt() >= 65 && el.charCodeAt() <= 90)
        ? el !== el.toUpperCase()
          ? el.charCodeAt() + 13 <= 122
            ? el.charCodeAt() + 13
            : el.charCodeAt() - 13
          : el.charCodeAt() + 13 <= 90
          ? el.charCodeAt() + 13
          : el.charCodeAt() - 13
        : el.charCodeAt()
    )
    .map((el) => String.fromCharCode(el))
    .join("");
}
