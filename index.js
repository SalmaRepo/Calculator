let numbers = document.querySelectorAll(".number");
let del = document.querySelector(".del");
let minusPlus = document.querySelector(".minusplus");
let operator = document.querySelectorAll(".operator");
let res = document.querySelector(".equal");
let clear = document.querySelector(".ac");
let input = document.getElementById("displayInput");
let output = document.getElementById("displayOutput");

numbers.forEach((el) => {
  el.addEventListener("click", function () {
    input.innerText += el.innerText;
    output.innerText += el.innerText;
    output.style.display = "none";
    el.style.backgroundcolor = "lightgrey";
  });
});

del.addEventListener("click", function () {
  input.innerText = input.innerText.toString().slice(0, -1);
  output.innerText = output.innerText.toString().slice(0, -1);
});

console.log(input.innerText);

function minusPlusToggle(inner) {
  if (!inner.startsWith("-")) {
    return "-" + inner;
  } else {
    return "+" + inner.substring(1);
  }
}

minusPlus.addEventListener("click", function () {
  input.innerText = minusPlusToggle(input.innerText);
  output.innerText = input.innerText;
});

operator.forEach((el) => {
  el.addEventListener("click", function () {
    input.innerText = " ";
  });
});

res.addEventListener("click", () => {
  console.log(output.innerText);
  let newRes = eval(output.innerText);
  input.innerText = newRes;
});

clear.addEventListener("click", function () {
  input.innerText = " ";
  output.innerText = " ";
});


/*keypress events*/
document.querySelector("body").addEventListener("keydown", (e) => {
  console.log(e);
  if (e.key.match(/[0-9]/g)) {
    input.innerText += e.key;
    output.innerText += e.key;
  }

  output.style.display = "none";
  ["+", "-", "/", "*", "="].forEach((sign) => {
    if (e.key === sign) {
      input.innerText = "";
      output.innerText += sign;
    }
  });

  if (e.key === "Backspace") {
    input.innerText = input.innerText.substring(0, input.innerText.length - 1);
    output.innerText = output.innerText.substring(
      0,
      output.innerText.length - 1
    );

    if (input.innerText.length <= 1 || output.innerText.length <= 1) {
      output.innerText = "";
    }
  }

  if (e.key === ".") {
    input.innerText += ".";
    output.innerText += ".";
  }

  if (e.key === "Enter") {
    input.innerText = eval(output.innerText);
  }
});
