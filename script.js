'use strict';

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let output = "";


//Adding event listener to the buttons and call calculate() on click.
buttons.forEach((button) => {
  //Button click calls calculate() with dataset value as argument.
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

//Function to calculate based on button clicks
const calculate = (btnValue) => {
  if(btnValue == '='){
    output = eval(output);
    display.value = output;
  }
  else if(btnValue == 'AC'){
    output = "";
    display.value = output;
  }
  else if(btnValue == 'DC'){
    output = output.substring(0, output.length - 1);
    display.value = output;
  }
  else{
    output += btnValue;
    display.value = output;
  }
};