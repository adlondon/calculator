var total = "0";
var numbers = ["0","1","2","3","4","5","6","7","8","9","."];
var modifiers = ["/", "+", "-", "*"]
var equals = "=";
var previousValue;
var screen = document.getElementById("screen");
screen.value = total;

function handleButtonPress(value) {

  if (numbers.includes(value)) {
    if (screen.value == "0" || modifiers.includes(previousValue)) {
      screen.value = value;
    } else {
      screen.value += value;
    }
    total += value;
  }
  else if (modifiers.includes(value)) {
    screen.value = value;
    total += value;
  }
  else if (equals.includes(value)) {
    screen.value = eval(total);
  }
  previousValue = value;
  console.log(total);
}
