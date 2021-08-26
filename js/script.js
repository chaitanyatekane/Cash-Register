const billAmount = document.querySelector('#bill-amount');
const cashAmount = document.querySelector('#cash-amount');
const billForm = document.querySelector('#bill-amount');

billAmount.addEventListener('focusout', displayCashAmount);
billForm.addEventListener('submit', handleFormSubmission);

function displayCashAmount() {
    cashAmount.parentElement.classList.add("active");
}

function handleFormSubmission(event) {
    event.preventDefault();
}