import { convertNumberToRomanNumber } from "./numberInRomanNumber.js";
import { convertNumberInBinaryNumber } from "./numberInBinaryNumber.js";
import { convertNumberInOctalNumber } from "./numberInOctalNumber.js";

const dataNumber = document.querySelector("#input__data");
const btn = document.querySelector(".btn");

document.addEventListener("keydown", () => {
  if (event.keyCode === 13) {
    if ((dataNumber.value > 3999) || (dataNumber.value < 0)) {
      alert("Você digitou um nenhum invalido.");
    } else if (dataNumber.value) {
      convertNumberToRomanNumber(dataNumber);
      convertNumberInBinaryNumber(dataNumber);
      convertNumberInOctalNumber(dataNumber);
    }
    else {
      alert("Você não digitou nenhum número.");
    }
  }
});

btn.addEventListener("click", () => {
  if ((dataNumber.value > 3999) || (dataNumber.value < 0)) {
    alert("Você digitou um nenhum invalido.");
  } else if (dataNumber.value) {
    convertNumberToRomanNumber(dataNumber);
    convertNumberInBinaryNumber(dataNumber);
    convertNumberInOctalNumber(dataNumber);
  } else {
    alert("Você não digitou nenhum número.");
  }
});
