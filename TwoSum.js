function twoSum(numbers, target) {
  const diff = {};
  const answers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (typeof diff[numbers[i]] === "number") {
      answers.push([diff[numbers[i]], i]);
    }
    if (diff[target - numbers[i]] == undefined) {
      diff[target - numbers[i]] = i;
    }
  }
  return answers[0] || [];
}
