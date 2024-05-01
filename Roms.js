class RomanNumerals {
  static toRoman(num) {
    let thousand = 0;
    let hundred = 0;
    let ten = 0;
    let digit = 0;
    let roms = "";
    thousand = (num / 1000) | 0;
    hundred = ((num - thousand * 1000) / 100) | 0;
    ten = ((num - thousand * 1000 - hundred * 100) / 10) | 0;
    digit = num - thousand * 1000 - hundred * 100 - ten * 10;
    let array = [thousand, hundred, ten, digit];
    if (thousand != 0) for (let i = 1; i <= thousand; i++) roms += "M";

    if (hundred != 0) {
      for (let i = 1; i <= hundred; i++) {
        if (hundred == 9) {
          roms += "CM";
          break;
        }
        if (hundred == 4) {
          roms += "CD";
          break;
        }
        if (hundred >= 5) {
          roms += "D";
          for (let i = 1; i <= hundred - 5; i++) roms += "C";
          break;
        }
        roms += "C";
      }
    }
    if (ten != 0) {
      for (let i = 1; i <= ten; i++) {
        if (ten == 9) {
          roms += "XC";
          break;
        }
        if (ten == 4) {
          roms += "XL";
          break;
        }
        if (ten >= 5) {
          roms += "L";
          for (let i = 1; i <= ten - 5; i++) roms += "X";
          break;
        }
        roms += "X";
      }
    }
    if (digit != 0) {
      for (let i = 1; i <= digit; i++) {
        if (digit == 9) {
          roms += "IX";
          break;
        }
        if (digit == 4) {
          roms += "IV";
          break;
        }
        if (digit >= 5) {
          roms += "V";
          for (let i = 1; i <= digit - 5; i++) roms += "I";
          break;
        }
        roms += "I";
      }
    }
    return roms;
  }

  static fromRoman(str) {
    let strSplit = str.split("");
    let thousand = 0;
    let hundred = 0;
    let ten = 0;
    let digit = 0;
    for (let i = 0; i < strSplit.length; i++) {
      if (strSplit[i] != "M") break;
      thousand++;
    }
    strSplit.splice(0, thousand);
    for (let i = 0; i < strSplit.length; i++) {
      if (strSplit[i] != "C" && strSplit[i] != "D") break;
      if (strSplit[i] == "C" && strSplit[i + 1] == "M") {
        hundred = 9;
        break;
      }
      if (strSplit[i] == "C" && strSplit[i + 1] == "D") {
        hundred = 4;
        break;
      }
      if (strSplit[i] == "D") {
        hundred = 5;
        for (let j = i + 1; j <= i + 1 + 4; j++) {
          if (strSplit[j] == "C") {
            hundred++;
          } else {
            break;
          }
        }
        break;
      }
      if (strSplit[i] == "C") {
        hundred++;
      } else {
        break;
      }
    }
    strSplit.splice(
      0,
      hundred == 9
        ? 2
        : hundred == 4
        ? 2
        : hundred == 5
        ? 1
        : hundred > 5
        ? hundred - 5 + 1
        : hundred
    );
    for (let i = 0; i < strSplit.length; i++) {
      if (strSplit[i] != "X" && strSplit[i] != "L") break;
      if (strSplit[i] == "X" && strSplit[i + 1] == "C") {
        ten = 9;
        break;
      }
      if (strSplit[i] == "X" && strSplit[i + 1] == "L") {
        ten = 4;
        break;
      }
      if (strSplit[i] == "L") {
        ten = 5;

        for (let j = i + 1; j <= i + 1 + 4; j++) {
          if (strSplit[j] == "X") {
            ten++;
          } else {
            break;
          }
        }
        break;
      }
      if (strSplit[i] == "X") {
        ten++;
      } else {
        break;
      }
    }
    strSplit.splice(
      0,
      ten == 9 ? 2 : ten == 4 ? 2 : ten == 5 ? 1 : ten > 5 ? ten - 5 + 1 : ten
    );
    for (let i = 0; i < strSplit.length; i++) {
      if (strSplit[i] != "I" && strSplit[i] != "V") break;
      if (strSplit[i] == "I" && strSplit[i + 1] == "X") {
        digit = 9;
        break;
      }
      if (strSplit[i] == "I" && strSplit[i + 1] == "V") {
        digit = 4;
        break;
      }
      if (strSplit[i] == "V") {
        digit = 5;

        for (let j = i + 1; j <= i + 1 + 4; j++) {
          if (strSplit[j] == "I") {
            digit++;
          } else {
            break;
          }
        }
        break;
      }
      if (strSplit[i] == "I") {
        digit++;
      } else {
        break;
      }
    }
    return thousand * 1000 + hundred * 100 + ten * 10 + digit;
  }
}

console.log(RomanNumerals.toRoman(5935));
console.log(RomanNumerals.fromRoman("MDCLXVI"));
