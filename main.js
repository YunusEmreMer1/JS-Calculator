document.addEventListener('DOMContentLoaded', () => {

let Memory= 0;
let operatingMode = undefined;

let entryWindow=false;

const DisplayElement = document.querySelector('.display');

const plusBtn = document.getElementById('plus');
plusBtn.addEventListener('click', plus );

const minusBtn = document.getElementById('minus');
minusBtn.addEventListener('click', minus );

const multiplyBtn = document.getElementById('multiply');
multiplyBtn.addEventListener('click', multiply );

const divideBtn = document.getElementById('divide');
divideBtn.addEventListener('click', divide );

const equalBtn = document.getElementById('equal');
equalBtn.addEventListener('click', equal );

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', clear);

const backspaceBtn = document.getElementById('backspace');
backspaceBtn.addEventListener('click', backspace);

// Numerics Declaration

const oneBtn = document.getElementById('1');
const twoBtn = document.getElementById('2');
const threeBtn = document.getElementById('3');
const fourBtn = document.getElementById('4');
const fiveBtn = document.getElementById('5');
const sixBtn = document.getElementById('6');
const sevenBtn = document.getElementById('7');
const eightBtn = document.getElementById('8');
const nineBtn = document.getElementById('9');
const zeroBtn = document.getElementById('0');


//Keystroke to Click Event Listener

document.addEventListener('keydown', (event) => {
    const key = event.key;
    const numKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
    if (numKeys.includes(key)) {
      const button = document.getElementById(key);
      console.log(`key: ${key}`);
      console.log(`button: ${button}`);
      button.click();
    } else if (key === '+') {
      document.getElementById('plus').click();
    } else if (key === '-') {
      document.getElementById('minus').click();
    } else if (key === '*') {
      document.getElementById('multiply').click();
    } else if (key === '/') {
      document.getElementById('divide').click();
    } else if (key === 'Enter') {
      document.getElementById('equal').click();
    } else if (key === 'Escape') {
      document.getElementById('clear').click();
    } else if (key === 'Backspace') {
      document.getElementById('backspace').click();
    }
  });










// Numerics Event Listener
const numberBtns = document.querySelectorAll('.numerics button');
numberBtns.forEach((button) => {
    button.addEventListener('click', () => {
        const number = button.textContent;
        if (DisplayElement.textContent == 0) {
            DisplayElement.textContent = number;
        } else  if (entryWindow===false) {
            DisplayElement.textContent += number;
            entryWindow=false;
        } else  if (entryWindow===true) {
            DisplayElement.textContent = number;
            entryWindow=false;
        }
    });
});

//Operators

function plus() {
    if (Memory === 0) {
      Memory = parseInt(DisplayElement.textContent);
      entryWindow = true;
      operatingMode = 'plus';
    } else {
      Memory += parseInt(DisplayElement.textContent);
      entryWindow = true;
      operatingMode = 'plus';
    }
  }

  function minus() {
    if (Memory === 0) {
      Memory = parseInt(DisplayElement.textContent);
        entryWindow = true;
        operatingMode = 'minus';
    } else {
      Memory -= parseInt(DisplayElement.textContent);
        entryWindow = true;
        operatingMode = 'minus';
    }
    
  }

  function multiply() {
    if (Memory === 0) {
      Memory = parseInt(DisplayElement.textContent);
      entryWindow = true;
        operatingMode = 'multiply';
    } else {
      Memory *= parseInt(DisplayElement.textContent);
        entryWindow = true;
        operatingMode = 'multiply';
    }
   
  }

  function divide() {
    if (Memory === 0) {
      Memory = parseInt(DisplayElement.textContent);
        entryWindow = true;
        operatingMode = 'divide';
    } else {
      Memory /= parseInt(DisplayElement.textContent);
        entryWindow = true;
        operatingMode = 'divide';
    }
  
  }

  function equal() {
    if (operatingMode === 'plus') {
        Memory += parseInt(DisplayElement.textContent);
    } else if (operatingMode === 'minus') {
        Memory -= parseInt(DisplayElement.textContent);
    } else if (operatingMode === 'multiply') {
        Memory *= parseInt(DisplayElement.textContent);
    } else if (operatingMode === 'divide') {
        Memory /= parseInt(DisplayElement.textContent);
    }

    if (Memory === Infinity) {
    DisplayElement.textContent = 'Error';
    } else {
    DisplayElement.textContent = Memory;
    }
    Memory = 0;
    
  }

function clear() {
    DisplayElement.textContent = 0;
    Memory = 0;
}

function backspace() {
    DisplayElement.textContent = DisplayElement.textContent.slice(0, -1);
    if (DisplayElement.textContent === '') {
        DisplayElement.textContent = 0;
    }
}













});
