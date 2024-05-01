function isInteresting(number, awesomePhrases) {
  // Go to town!
  // В задаче не было написано, что обычные числа по дефолту boring
  if(number<=9){
    return 0
  }
  // тут понятно, если в массиве awesomePhrases есть number, то возвращаем 2
  if (awesomePhrases.includes(number)) {
    return 2;
  }
   // тут понятно, если в массиве awesomePhrases есть number+1 или number+2 , то возвращаем 1
  if (
    awesomePhrases.includes(number + 1) ||
    awesomePhrases.includes(number + 2)
  ) {
    return 1;
  }
  // тут я создал дополнительную функцию, чтобы не повторять код
  function isInteresting2(number) {
    // Any digit followed by all zeros: 100, 90000
    // преобразую число в строку и строку в массив 123 => ['1','2','3'] для дальнейшей работы
    const numberArr = number.toString().split("");
    // проверяю на все нули, в задаче не сказано, что минимальная длина такого числа должна быть минимум 3, 30,40,50 и тд не подходят
    let allZeros =
    // тут отнимаю от реальной длины массива, получившуюся длину, она должна быть равна 1
      numberArr.length -
      // тут создаю новый массив, филтруя старый откидывая у него 1 элемент, чтобы проверить, что все остальные нули
        numberArr.filter((el, index) => index != 0 && el == "0").length ==
      1 && numberArr.length>=3;
    // Every digit is the same number: 1111
    // тут проверяю, что все элменты одинаковые
    let sameDigits = numberArr.every((el) => el == number.toString()[0])&& numberArr.length>=3;
    // The digits are sequential, incementing†: 1234
    // тут проверяю на последоватльное возрастание 1234 и тд
    let sequential =
    // создаю новый массив
      numberArr.filter((el, index) => {
        // тут важно, чтобы мы не вышли за пределы массива 
        if (index != numberArr.length - 1) {
          // тут проверяю, что если el = 9, то следующи элемент должен быть 0 (см. условие задачи)
          if (numberArr[index] == 9 && numberArr[index + 1] == 0) {
            return true;
          }
          // тут от следующего элемента отнимаю нынешнее сравниваю с 1, потому что они должный отличаться на 1
          return numberArr[index + 1] - numberArr[index] == 1;
        }
        return true;
      }) 
      // тут проверяю, равные ли длины получились, если да, то проверяю длину числа
      .length == numberArr.length && numberArr.length>=3;
    // The digits are sequential, decrementing‡: 4321
    let sequentialBack =
    // тут все тоже самое, просто делаю реверс в начале
      numberArr.reverse().filter((el, index) => {
        if (index != numberArr.length - 1) {
          return numberArr[index + 1] - numberArr[index] == 1;
        }
        return true;
      }).length == numberArr.length &&numberArr.length>=3 ;
    // The digits are a palindrome: 1221 or 73837
    // тут преобразую number в строку и сравниваю с переврнутым number, если они равны, то это палиндром
    let palindrome = numberArr.join("") == numberArr.reverse().join("") && numberArr.length>=3;
    return ![allZeros, sameDigits, sequential, sequentialBack, palindrome].every(el=>el==false);
  }
  // тут проверяю, если число интересное, то возвращаю 2
  if(isInteresting2(number)){
    return 2
  }
    // тут проверяю, если число+1 или число +2  интересное, то возвращаю 1
  if(isInteresting2(number+1) || isInteresting2(number+2)){
    return 1
  }
  // если никакое условие не прошло, то возвращаю 0
  return 0
}

console.log(isInteresting(88, [1337, 256]));
