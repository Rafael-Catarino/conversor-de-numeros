import { convertNumberToRomanNumber } from './numberInRomanNumber.js';
import { convertRomanNumberToNumber } from './romanNumberInNumber.js';


const dataNumber = document.querySelector('.input__data');
const btn = document.querySelector('.btn');
const dataRomanNumber = document.querySelector('.input__data__romanNumber');

document.addEventListener('keydown', () => {
  if (event.keyCode === 13) {
    if (dataNumber.value) {
      convertNumberToRomanNumber(dataNumber);
      dataNumber.value = '';
    } else if (dataRomanNumber.value) {
      convertRomanNumberToNumber(dataRomanNumber);
      dataRomanNumber.value = '';
    } else {
      alert('você não digitou nenhum número.');
    }
  }
});

btn.addEventListener('click', () => {
  if (dataNumber.value) {
    convertNumberToRomanNumber(dataNumber);
    dataNumber.value = '';
  } else if (dataRomanNumber.value) {
    convertRomanNumberToNumber(dataRomanNumber);
    dataRomanNumber.value = '';
  } else {
    alert('você não digitou nenhum número.');
  }
});