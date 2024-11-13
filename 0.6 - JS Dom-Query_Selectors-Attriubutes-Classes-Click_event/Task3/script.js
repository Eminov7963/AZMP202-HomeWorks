
const numInput = document.querySelector(".num");
const value1Input = document.querySelector(".value1");
const value2Input = document.querySelector(".value2");
const addButton = document.querySelector(".add");
const subButton = document.querySelector(".sub");
const multiButton = document.querySelector(".multi");
const divisionButton = document.querySelector(".division");
const resetButton = document.querySelector(".reset");


function add() {
  const value1 = parseFloat(value1Input.value);
  const value2 = parseFloat(value2Input.value);
  if (!isNaN(value1) && !isNaN(value2)) {
    numInput.value = value1 + value2;
  } else {
    numInput.value = "Invalid Input";
  }
}

function subtract() {
  const value1 = parseFloat(value1Input.value);
  const value2 = parseFloat(value2Input.value);
  if (!isNaN(value1) && !isNaN(value2)) {
    numInput.value = value1 - value2;
  } else {
    numInput.value = "Invalid Input";
  }
}

function multiply() {
  const value1 = parseFloat(value1Input.value);
  const value2 = parseFloat(value2Input.value);
  if (!isNaN(value1) && !isNaN(value2)) {
    numInput.value = value1 * value2;
  } else {
    numInput.value = "Invalid Input";
  }
}

function divide() {
  const value1 = parseFloat(value1Input.value);
  const value2 = parseFloat(value2Input.value);
  if (!isNaN(value1) && !isNaN(value2) && value2 !== 0) {
    numInput.value = value1 / value2;
  } else {
    numInput.value = value2 === 0 ? "Cannot Divide by Zero" : "Invalid Input";
  }
}


function reset() {
  value1Input.value = "";
  value2Input.value = "";
  numInput.value = "";
}


addButton.addEventListener("click", add);
subButton.addEventListener("click", subtract);
multiButton.addEventListener("click", multiply);
divisionButton.addEventListener("click", divide);
resetButton.addEventListener("click", reset);
