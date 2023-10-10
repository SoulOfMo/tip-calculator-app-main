"use strict";

//// selecting the element

let billValue = document.querySelector(".bill-value");
let buttons = document.querySelectorAll('input[type="button"]');
let peopleValue = document.querySelector(".people-value");
let errorMsg = document.querySelector(".error-msg");
let resetBtn = document.querySelector(".reset");
let customValue = document.querySelector(".custom");
let tipAmount = document.querySelector(".tip-amount");
let totalAmount = document.querySelector(".total-amount");
let billResult, peoplelResult, total;

////// Inital Value
function defaultValue() {
  tipAmount.textContent = '$0.00';
  totalAmount.textContent = '$0.00';
  billValue.value = '0';
  peopleValue.value= '0';
}

billValue.addEventListener("blur", function () {
  billResult = Number(billValue.value);
});

peopleValue.addEventListener("blur", function () {
  console.log(peopleValue.value);
  peoplelResult = Number(peopleValue.value);
});

// buttons.forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     console.log(btn.placeholder);
//   });
// });

for (const btn of buttons) {
  btn.addEventListener("click", function () {
    if (peopleValue.value == 0) {
      document.getElementsByClassName("error-msg").classList.remove(hidden);
      peopleValue.classList.add("error");
    } else {
      var tipPercentage = Number(btn.placeholder) / 100;
      let tipResult = ((billResult * tipPercentage) / peoplelResult);
      let total = (billResult / peoplelResult + tipResult).toFixed(2);
      console.log(tipResult);
      tipAmount.textContent = `$${tipResult.toFixed(2)}`;
      totalAmount.textContent = `$${total}`;
    }
  });
}

resetBtn.addEventListener('click', defaultValue)

// customValue.addEventListener("blur", function () {
//   console.log(customValue.value);
// });
