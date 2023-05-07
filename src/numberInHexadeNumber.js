const resultHexadecimalNumber = document.querySelector(
  ".result__hexadecimalNumber"
);

const checkNumber = (n) => {
  switch (n) {
    case 10:
      return "A";
    case 11:
      return "B";
    case 12:
      return "C";
    case 13:
      return "D";
    case 14:
      return "E";
    case 15:
      return "F";
    default:
      return n;
  }
}

export const convertNumberInHexaNumber = (dataNumber) => {
  let number = dataNumber.value;
  if (number == 0) {
    resultHexadecimalNumber.innerText = 0;
  } else {
    let arrHexa = [];
    while (number != 1 && number != 0) {
      let n = number % 16;
      number = Math.trunc(number / 16);
      arrHexa.push(checkNumber(n));
    }
    arrHexa.push(number);
    if (arrHexa[arrHexa.length - 1] == 0) {
      arrHexa.pop();
    }
    const hexaNumber = arrHexa.reverse().join("");
    resultHexadecimalNumber.innerText = hexaNumber;
  }
};
