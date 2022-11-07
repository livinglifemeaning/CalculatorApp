// THEME TOGGLE
const themeToggle = document.querySelector(".circle");
const doc = document.firstElementChild;
const preferredTheme = localStorage.getItem("color-scheme");
if (preferredTheme) {
  doc.setAttribute("data-color-scheme", preferredTheme);
  themeToggle.setAttribute("data-theme", preferredTheme);
}
themeToggle.addEventListener("click", () => {
  const currentTheme = themeToggle.getAttribute("data-theme");
  if (currentTheme === "blue") {
    themeToggle.setAttribute("data-theme", "white");
    doc.setAttribute("data-color-scheme", "white");
    localStorage.setItem("color-scheme", "white");
  } else if (currentTheme === "white") {
    themeToggle.setAttribute("data-theme", "purple");
    doc.setAttribute("data-color-scheme", "purple");
    localStorage.setItem("color-scheme", "purple");
  } else if (currentTheme === "purple") {
    themeToggle.setAttribute("data-theme", "blue");
    doc.setAttribute("data-color-scheme", "blue");
    localStorage.setItem("color-scheme", "blue");
  }
});

// CALCULATOR FUNCTIONALITY

const display = document.querySelector(".calculator-input");
const zero = document.querySelector("[data-action = 'zero']");
const one = document.querySelector("[data-action = 'one']");
const two = document.querySelector("[data-action = 'two']");
const three = document.querySelector("[data-action = 'three']");
const four = document.querySelector("[data-action = 'four']");
const five = document.querySelector("[data-action = 'five']");
const six = document.querySelector("[data-action = 'six']");
const seven = document.querySelector("[data-action = 'seven']");
const eight = document.querySelector("[data-action = 'eight']");
const nine = document.querySelector("[data-action = 'nine']");
const add = document.querySelector("[data-action = 'add']");
const subtract = document.querySelector("[data-action = 'subtract']");
const multiply = document.querySelector("[data-action = 'multiply']");
const divide = document.querySelector("[data-action = 'divide']");
const decimal = document.querySelector("[data-action = 'decimal']");
const deleteValue = document.querySelector("[data-action = 'delete']");
const reset = document.querySelector("[data-action = 'reset']");
const calculate = document.querySelector("[data-action = 'calculate']");

const updateCalculation = (num) => {
  if (display.textContent === "0") {
    display.textContent = num;
  } else {
    display.textContent += num;
  }
};
const deleteValueFromCalculation = () => {
  if (display.textContent.length === 1) {
    display.textContent = "0";
  } else {
    display.textContent = display.textContent.slice(0, -1);
  }
};
zero.addEventListener("click", () => updateCalculation(0));
one.addEventListener("click", () => updateCalculation(1));
two.addEventListener("click", () => updateCalculation(2));
three.addEventListener("click", () => updateCalculation(3));
four.addEventListener("click", () => updateCalculation(4));
five.addEventListener("click", () => updateCalculation(5));
six.addEventListener("click", () => updateCalculation(6));
seven.addEventListener("click", () => updateCalculation(7));
eight.addEventListener("click", () => updateCalculation(8));
nine.addEventListener("click", () => updateCalculation(9));
add.addEventListener("click", () => updateCalculation("+"));
subtract.addEventListener("click", () => updateCalculation("-"));
multiply.addEventListener("click", () => updateCalculation("*"));
divide.addEventListener("click", () => updateCalculation("/"));
decimal.addEventListener("click", () => updateCalculation("."));
deleteValue.addEventListener("click", deleteValueFromCalculation);
reset.addEventListener("click", () => {
  display.textContent = 0;
});
calculate.addEventListener("click", () => {
  display.textContent = eval(display.textContent);
});
