const unidade = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
const dezena = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
const centena = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
const milhar = ["M", "MM", "MMM"];

const dataRomanNumber = document.querySelector(".result__romanNumber");

//convertendo números decimais em romanos.
const getTheFirstRomanNumber = (number) => {
  return unidade[number - 1];
};

const getTheSecondRomanNumber = (number) => {
  return dezena[number - 1];
};

const getTheThirdRomanNumber = (number) => {
  return centena[number - 1];
};

const getTheFourthRomanNumber = (number) => {
  return milhar[number - 1];
};

const ridingTheRomanNumeral = (romanNumber) => {
  const resultRomanNumber = romanNumber.reverse().join("");
  dataRomanNumber.innerText = resultRomanNumber;
};

export const convertNumberToRomanNumber = (dataNumber) => {
  if (dataNumber.value == 0) {
    dataRomanNumber.innerText = "0";
  } else {
    const number = dataNumber.value.split("").reverse();
    const romanNumber = [];
    for (let i = 0; i < number.length; i = i + 1) {
      switch (i) {
        case 0:
          romanNumber.push(getTheFirstRomanNumber(number[i]));
          break;
        case 1:
          romanNumber.push(getTheSecondRomanNumber(number[i]));
          break;
        case 2:
          romanNumber.push(getTheThirdRomanNumber(number[i]));
          break;
        case 3:
          romanNumber.push(getTheFourthRomanNumber(number[i]));
          break;
        default:
          alert("Você digitou um número maior que o permitido");
      }
    }
    ridingTheRomanNumeral(romanNumber);
  }
};
