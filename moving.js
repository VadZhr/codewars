// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
function moveZeros(arr) {
  let newArr = arr.filter((el) => el !== 0);
  newArr.push(...arr.filter((el) => el === 0));
  return newArr;
}

console.log(moveZeros([false,0,0,0, 1, 0, 1, 2, 0, 1, 3, "a"]));
