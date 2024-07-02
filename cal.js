let currentInput = "";

function toDisplay(value) {
  currentInput += value;
  document.getElementById("tabel").value = currentInput;
}

function ClearDisplay() {
  currentInput = "";
  document.getElementById("tabel").value = "";
}

function Calculate() {
  let result = eval(currentInput);
  document.getElementById("tabel").value = result;
  currentInput = result();
}

function clearScreen() {
  currentInput = "";
  document.getElementById("tabel").value = "";
}