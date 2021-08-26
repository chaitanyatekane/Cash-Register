const billAmount = document.querySelector("#bill-amount");
const cashAmount = document.querySelector("#cash-amount");
const invalidInput = document.querySelector(".invalid-input");
const noteTds = document.querySelectorAll("#note-values td");
const billForm = document.querySelector("#bill-form");

billAmount.addEventListener("focusout", displayCashAmount);
billForm.addEventListener("submit", handleFormSubmission);

function displayCashAmount() {
  cashAmount.parentElement.classList.add("active");
}

function handleFormSubmission(event) {
  event.preventDefault();
  validateCashAndFillTable(billAmount.value, cashAmount.value);
}

function validateCashAndFillTable(amount, cash) {
  const { message, result } = validateAmounts(amount, cash);
  if (!result) {
    printError(message);
    return;
  }
  const change = cash - amount;
  const notes = [2000, 500, 100, 20, 10, 5, 1];
  if (change > 0) fillTableWithNotes(notes, change);
}

function fillTableWithNotes(notes, change) {
  for (let index = 0; index < notes.length; index++) {
    const notesNumber = parseInt(change / notes[index]);
    change = change % notes[index];
    noteTds[index].innerText = notesNumber;
    if (change === 0) return;
  }
}

function printError(message) {
  invalidInput.innerText = message;
  invalidInput.classList.add("active");
}

function validateAmounts(amount, cash) {
  if (!isNaN(amount) && !isNaN(cash)) {
    if (amount > cash) {
      return {
        message: "Do you want to wash the plates?",
        result: false,
      };
    }
    return {
      message: "",
      result: true,
    };
  }
  return {
    message: "Invalid input amount. Please make sure you type a number",
    result: false,
  };
}