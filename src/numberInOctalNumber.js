const resultOctalNumber = document.querySelector(".result__octalNumber");

export const convertNumberInOctalNumber = (dataNumber) => {
  let arrOctal = [];
  let number = dataNumber.value;
  while (number != 1 && number != 0) {
    let n = number % 8;
    number = Math.trunc(number / 8);
    arrOctal.push(n);
  }
  arrOctal.push(number);
  arrOctal.pop();
  const octalNumber = arrOctal.reverse().join("");
  resultOctalNumber.innerText = octalNumber;
}