//convertendo número romano em número decimal.

const dataNumber = document.querySelector(".input__data__number");

const assemblingDecimalNumber = (arr) => {
  let number = 0;
  for (let i = 0; i < arr.length; i++) {
    let n = arr[i];
    let n1 = arr[i - 1];
    if (i === 0) {
      number = n;
    } else if (n === n1 || n1 - n > 0) {
      number = number + n;
    } else {
      number = number + (n - n1 * 2);
    }
  }
  dataNumber.innerHTML = number;
};

export const convertRomanNumberToNumber = (dataRomanNumber) => {
  const romanNumber = dataRomanNumber.value.toUpperCase();
  const arrNumber = [];
  for (let i = 0; i < romanNumber.length; i++) {
    switch (romanNumber[i]) {
      case "I":
        arrNumber.push(1);
        break;
      case "V":
        arrNumber.push(5);
        break;
      case "X":
        arrNumber.push(10);
        break;
      case "L":
        arrNumber.push(50);
        break;
      case "C":
        arrNumber.push(100);
        break;
      case "D":
        arrNumber.push(500);
        break;
      case "M":
        arrNumber.push(1000);
        break;
      default:
        alert("Você digitou um numero invalido");
    }
  }
  assemblingDecimalNumber(arrNumber);
};
