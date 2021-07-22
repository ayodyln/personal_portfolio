"use strict";

//Establish variables and const data

//input
// const data = Number(document.getElementById("user-input").value); //User bill input

const tipPercent = document.querySelectorAll(".tip"); //User tip input (button)

//btns
const btn10 = document.querySelector(".btn--10");
const btn15 = document.querySelector(".btn--15");
const btn20 = document.querySelector(".btn--20");
const btn25 = document.querySelector(".btn--25");

// const tipInputPercent = document.getElementById("tip-input"); //User manual tip input (text)
const calcBtn = document.querySelector(".submit-btn"); //User Submit button

//output
const tipText = document.querySelector(".tip-amount"); //tip amount output
const billText = document.querySelector(".total-amount"); //total amount outpout

//clear
const clearBtn = document.querySelector(".clear-calc"); //clear button

let newData = 0;

function calc(bill, tip) {
  const tipTotal = bill * tip;
  // console.log(tipTotal)
  const total = tipTotal + bill;
  // console.log(total)
  return total;
}

function getTip(bill, tip) {
  const tipTotal = bill * tip;
  return tipTotal;
}

function toggleClass(el) {
  el.classList.toggle("active");
}
function clearClass(el1, el2, el3) {
  el1.classList.remove("active");
  el2.classList.remove("active");
  el3.classList.remove("active");
}

btn10.addEventListener("click", () => {
  clearClass(btn15, btn20, btn25);
  toggleClass(btn10);
});
btn15.addEventListener("click", () => {
  clearClass(btn10, btn20, btn25);
  toggleClass(btn15);
});
btn20.addEventListener("click", () => {
  clearClass(btn10, btn15, btn25);
  toggleClass(btn20);
});
btn25.addEventListener("click", () => {
  clearClass(btn10, btn15, btn20);
  toggleClass(btn25);
});
clearBtn.addEventListener("click", () => {
  location.reload();
});

calcBtn.addEventListener("click", () => {
  const data = Number(document.getElementById("user-input").value);
  // console.log(data, typeof data)
  const tipInputPercent = Number(document.getElementById("tip-input").value);
  //   console.log(tipInputPercent);
  if (tipInputPercent > 0) {
    newData = calc(data, tipInputPercent / 100);
    tipText.textContent = getTip(data, tipInputPercent / 100);
    billText.textContent = newData;
    return newData;
  } else {
    tipPercent.forEach((el) => {
      //FINISH IF STATMENT FOR CHECKING TEXT-CONTENT OF THE BUTTONS
      if (el.textContent === "10%" && el.classList.contains("active")) {
        newData = calc(data, 0.1);
        // console.log(typeof newData, newData, data);
        tipText.textContent = getTip(data, 0.1);
        billText.textContent = newData;
        return newData;
      } else if (el.textContent === "15%" && el.classList.contains("active")) {
        newData = calc(data, 0.15);
        // console.log(typeof newData, newData, data);
        tipText.textContent = getTip(data, 0.15);
        billText.textContent = newData;
        return newData;
      } else if (el.textContent === "20%" && el.classList.contains("active")) {
        newData = calc(data, 0.2);
        // console.log(typeof newData, newData, data);
        tipText.textContent = getTip(data, 0.2);
        billText.textContent = newData;
        return newData;
      } else if (el.textContent === "25%" && el.classList.contains("active")) {
        newData = calc(data, 0.25);
        // console.log(typeof newData, newData, data);
        tipText.textContent = getTip(data, 0.25);
        billText.textContent = newData;
        return newData;
      }
    });
  }
});
