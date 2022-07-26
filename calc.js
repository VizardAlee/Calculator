//VARIABLES
const keys = Array.from(document.querySelectorAll('button'));
const equals = document.querySelector('.equals');
const opKeys = document.querySelector('.operator');
const numKeys = document.querySelectorAll('.num');
let num1 = '';
let num2 = '';
let screenText = 0;

let opId = "";
let result = 0;
const display = document.querySelector('.display');
screenText = document.querySelector('.display').textContent;

keys.forEach((key)=>{
    key.addEventListener('click', (e)=>{
        if(e.target.innerText === 'Clear') {
            display.innerText = "";
        }else if (e.target.innerText === "DEL") {
            return deleteVal();
        } else if (e.target.innerText === ".") {
            if (display.innerText.includes('.')) {
                return;
            } else {
                display.innerText += e.target.innerText;
            }
        } else {
            display.innerText += e.target.innerText;
        }
    })
});



//CREATING FUNCTIONS FOR ADD, SUBTRACT, MULTIPLY AND DIVIDE

//Addition
function add(a,b) {
   return a + b;
}
console.log(add(1,2,3,4,5,6,7))

//Subtraction
function subtract(a,b) {
    return a - b;
}

//Multiplication
function multiply(a,b) {
    return a * b;
}

//Division
function divide(a,b) {
    return a / b;
}

//Operate
function operate(operator, a, b) {
    a = Number(a); //Ensure inputs are read as numbers using Number method
    b = Number(b);

    //Using switch statement to make provision for all operators
    switch(operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            if (b===0) return "Nah Maan!"
            else return divide(a,b);
        default:
            return null;
    }
}

function deleteVal(){
    display.textContent = display.textContent.toString().slice(0,-1);
}

function evaluate() {

}
//Display
/*
function displayOp(set) {
    if(screenText === 0  || screenText === "0" || screenText === "") {
        screenText = set;
    } else if (screenText !== 0 || screenText !== "0" || screenText !== "") {
        screenText += set;
    }
    screenText.parseFloat(document.querySelector('.display').textContent)
}
*/
/*
let a = 3;
let b = 2;
console.log(operate(divide,a,b));
console.log()
*/
/***********************************/




