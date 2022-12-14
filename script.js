// if document ready was not used it will always return empty object
console.log(document.querySelectorAll('.button'));
document.addEventListener('DOMContentLoaded', ready);

function ready() {
  // console.clear();
  console.log('DOM is ready');
  // this will always return valid object because it gets ready only when document is loaded
  console.log(document.querySelectorAll('.button'));
}

function clearInput() {
  // str.slice(0, -1);
  // str.substring(0, str.length - 1);
  if (document.querySelector('#inlineRadio1').checked) {
    myCalc.input1 = myCalc.input1.substring(0, myCalc.input1.length - 1);
    document.querySelector('#input1').value = myCalc.input1;
  }
  if (document.querySelector('#inlineRadio2').checked) {
    myCalc.input2 = myCalc.input2.substring(0, myCalc.input2.length - 1);
    document.querySelector('#input2').value = myCalc.input2;
  }
}

function resetAll() {
  myCalc.input1 = '';
  myCalc.input2 = '';
  myCalc.result = '';
  myCalc.currentOperation = '';
  document.querySelector('#input1').value = myCalc.input1;
  document.querySelector('#input2').value = myCalc.input2;
  this.updateResultInUI();
  console.log(myCalc);
}

function loadInputs(event) {
  debugger;
  let key = '';
  if (event) key = event.target.innerText;
  console.log(event);
  if (document.querySelector('#inlineRadio1').checked) {
    myCalc.input1 += key;

    // mycalc.input1.concat(key)
    document.querySelector('#input1').value = myCalc.input1;
  }
  if (document.querySelector('#inlineRadio2').checked) {
    myCalc.input2 += key;
    document.querySelector('#input2').value = myCalc.input2;
  }
}

// arithmetic calc performance code
function executeArithmeticOperation(operand) {
  let key = '';

  // if (event) operand = event.target.innerText;

  console.log(operand);

  myCalc.currentOperation = operand;
  switch (operand) {
    case 'POW':
      myCalc.pow();
      break;
    case 'SIN':
      myCalc.sin();
      break;
    case 'COS':
      myCalc.cos();
      break;
    case 'TAN':
      myCalc.tan();
      break;
    default:
      break;
  }
  this.updateResultInUI();
}

function updateResultInUI() {
  document.querySelector('#operand').innerText = myCalc.currentOperation;
  document.querySelector('#result').value =
    myCalc.result !== 'NaN' ? myCalc.result : '0';
}

// function UsingPow() {
//   debugger;
//   const cb = document.querySelector('#areusingpow');
//   if (cb.checked) {
//     hide(document.querySelector('.forpow'));
//   } else {
//     var elements = document.querySelectorAll('.forpow');
//     show(elements);
//   }
// }

// function hide (elements) {
//   elements = elements.length ? elements : [elements];
//   for (var index = 0; index < elements.length; index++) {
//     elements[index].style.display = 'none';
//   }
// }
// function show (elements, specifiedDisplay) {
//   elements = elements.length ? elements : [elements];
//   for (var index = 0; index < elements.length; index++) {
//     elements[index].style.display = specifiedDisplay || 'block';
//   }
// }