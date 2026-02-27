let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");
let equal = document.getElementById("cal");
let clear = document.getElementById("clear");
let delBtn = document.getElementById("del");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.innerText;
    if (value !== "=") {
      display.value += value;
    }
  });
});

equal.addEventListener("click", () => {
  let expression = display.value;
  let result = eval(expression);
  display.value = result;
});

clear.addEventListener("click", () => {
  display.value = "";
});

delBtn.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});
