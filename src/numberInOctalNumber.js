const resultOctalNumber = document.querySelector(".result__octalNumber");

export const convertNumberInOctalNumber = (dataNumber) => {
  let number = dataNumber.value;
  if (number == 0) {
    resultOctalNumber.innerText = 0;
  } else {
    let arrOctal = [];
    while (number != 1 && number != 0) {
      let n = number % 8;
      number = Math.trunc(number / 8);
      arrOctal.push(n);
    }
    arrOctal.push(number);
    if(arrOctal[arrOctal.length-1] == 0){
      arrOctal.pop();
    }
    const octalNumber = arrOctal.reverse().join("");
    resultOctalNumber.innerText = octalNumber;
  }
};
