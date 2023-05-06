const resultHexadecimalNumber = document.querySelector(
  ".result__hexadecimalNumber"
);

export const convertNumberInHexaNumber = (dataNumber) => {
  let number = dataNumber.value;
  if (number == 0) {
    resultHexadecimalNumber.innerText = 0;
  } else {
    let arrHexa = [];
    while (number != 1 && number != 0) {
      let n = number % 16;
      number = Math.trunc(number / 16);
      arrHexa.push(n);
    }
    arrHexa.push(number);
    if (arrHexa[arrHexa.length - 1] == 0) {
      arrHexa.pop();
    }
    const hexaNumber = arrHexa.reverse().join("");
    resultHexadecimalNumber.innerText = hexaNumber;
  }
};
