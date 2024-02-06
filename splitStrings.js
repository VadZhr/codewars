function solution(str) {
  let str_ = str.split("");
  let result = [];
  while (str_.length > 1) {
    result.push(str_.splice(0, 2).join(""));
  }
  if (str_.length == 1) {
    result.push(str_[0] + "_");
  }
  return result;
}
