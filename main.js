"use strict";

//// selecting the element

const billValue = document.querySelector(".bill-value");
const buttons = document.querySelectorAll('input[type="button"]');
const peopleValue = document.querySelector(".people-value");
const errorMsg = document.querySelector(".error-msg");
const resetBtn = document.querySelector(".reset");
const customValue = document.querySelector(".custom");
const tipAmount = document.querySelector(".tip-amount");
const totalAmount = document.querySelector(".total-amount");
let billResult, peopleResult, total;

////// Inital Value
function defaultValue() {
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
  billValue.value = "0";
  peopleValue.value = "0";
  customValue.value = 0;
}

function calculateTipAndTotal(tipPercentage) {
  const tipResult = (billResult * tipPercentage) / peopleResult;
  const total = (billResult / peopleResult + tipResult);
  tipAmount.textContent = `$${tipResult.toFixed(2)}`;
  totalAmount.textContent = `$${total.toFixed(2)}`;
}

billValue.addEventListener("blur", function () {
  billResult = Number(billValue.value);
});

peopleValue.addEventListener("blur", function () {
  peopleResult = Number(peopleValue.value);
});

buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (peopleValue.value == 0) {
      errorMsg.classList.remove("hidden");
      peopleValue.classList.add("error");
      setTimeout(() => {
        errorMsg.classList.add("hidden");
        peopleValue.classList.remove("error");
      }, 3000);
    } else {
      const tipPercentage = Number(btn.placeholder) / 100;
        calculateTipAndTotal(tipPercentage)
    }
  });
});

resetBtn.addEventListener("click", defaultValue);

///Custom Input

customValue.addEventListener("blur", function () {
  if (peopleValue.value == 0) {
    errorMsg.classList.remove("hidden");
    peopleValue.classList.add("error");
  } else {
    const tipPercentage = Number(customValue.value) / 100;
    calculateTipAndTotal(tipPercentage)
  }
});
