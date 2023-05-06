const dataNumberBinary = document.querySelector(".result__binaryNumber");

export const convertNumberInBinaryNumber = (num) => {
  let arrBinary = [];
  let number = num.value;
  while (number != 1 && number != 0) {
    let n = number % 2;
    number = Math.trunc(number / 2);
    arrBinary.push(n);
  }
  arrBinary.push(number);
  const binaryNumber = arrBinary.reverse().join("");
  dataNumberBinary.innerText = binaryNumber;
};
