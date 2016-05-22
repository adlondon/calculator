(function addEventListener(){
  var buttons = [].slice.call(document.querySelectorAll('.calc-btn'));
  clear = document.getElementById("clear-btn");
  evaluate = document.getElementById("eval-btn");
  display = document.getElementById("input");
  total = [];
  currVal = 0;
  buttons.forEach(function(e) {
    e.addEventListener("click", displayVal);
  });
  clear.addEventListener("click", clearVal);
  evaluate.addEventListener("click", calcVal);
})();

function displayVal(e) {
  e.preventDefault();
  var value = this.textContent;
  if(Number(value)) {
    value = Number(value);
  } else {
    value = value;
  }
  if(typeof value === "number" || value === ".") {
    if (typeof currVal === "number" || currVal === ".") {
      display.innerHTML += value;
    } else {
      display.innerHTML = value;
    }
    currVal = value;
  } else if (typeof value === "string" && value !== ".") {
    total.push(display.innerHTML);
    display.innerHTML = value;
    total.push(display.innerHTML);
    currVal = value;
  }
}

function clearVal(e) {
  e.preventDefault();
  total = [];
  currVal = 0;
  display.innerHTML = "";
}

function calcVal(e) {
  e.preventDefault();
  total.push(display.innerHTML);
  var newTotal = total.toString().replace(/,/g, "")
  console.log(newTotal);
  display.innerHTML = eval(newTotal);
}
