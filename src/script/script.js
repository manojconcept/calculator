console.log("linked");
let display = document.getElementById('display');

function appendToDisplay(value) {
  if (/[\d\+\-\*\/\.%]/.test(value)) {
    display.innerHTML += value;
  } else {
    alert('Invalid input! Please enter numbers and arithmetic operators only.');
  }
}

function clearDisplay() {
  display.innerHTML = '';
}

function deleteLast() {
  display.innerHTML = display.innerHTML.slice(0, -1);
}

function calculate() {
  try {
    display.innerHTML = Function('"use strict";return (' + display.innerHTML + ')')();
  } catch (error) {
    display.innerHTML = 'Error';
  }
}

// Listen for keyboard events
document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (/\d|\+|\-|\*|\/|%|\./.test(key)) {
    event.preventDefault(); // Prevent default action for keys
    appendToDisplay(key);
  } else if (key === 'Enter') {
    event.preventDefault();
    calculate();
  } else if (key === 'Backspace') {
    event.preventDefault();
    deleteLast();
  } else if (key === 'Escape') {
    event.preventDefault();
    clearDisplay();
  } else {
    alert('Invalid input! Please enter numbers and arithmetic operators only.');
  }
});