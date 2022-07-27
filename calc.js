/*
//VARIABLES
const keys = Array.from(document.querySelectorAll('button'));
const equals = document.querySelector('.equals');
const opKeys = Array.from(document.querySelectorAll('.operator'));
const numKeys = Array.from(document.querySelectorAll('.num'));
const contKeys = Array.from(document.querySelectorAll('.control'));
let num1 = '';
let num2 = '';
//let screenText = 0;
let currentOp = "";

let opId = "";
let result = 0;
const display = document.querySelector('.display');
//display.innerText = screenText;
/*
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
*
numKeys.forEach((numKey) => {
    numKey.addEventListener('click', (e)=>{
        display.innerText += e.target.innerText;
    });
});
contKeys.forEach((contKey) => {
    contKey.addEventListener('click', (e)=> {
        if(e.target.innerText === "Clear") {
            return clearVal();
        } else if (e.target.innerText === "DEL") {
            return deleteVal();
        }
    });
});
opKeys.forEach((opKey) => {
    opKey.addEventListener('click', (e)=>{
        if(e.target.innerText === "=") {
            return evaluate();
        } else {
        display.innerText += " " + e.target.innerText + " ";
        }
    });
});
equals.addEventListener('click', evaluate);


//CREATING FUNCTIONS FOR ADD, SUBTRACT, MULTIPLY AND DIVIDE

//Addition
function add(a,b) {
   return a + b;
}

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

function clearVal() {
    display.innerText = "";
}
function evaluate() {
    if (currentOp === null ) {
        return;
    }
    if(currentOp === "/" && display.innerText === "0") {
        alert("Calm down bro! Look again");
        return;
    }
    num2 = display.textContent;
    display.textContent = roundResult(operate(currentOp, num1, num2));
    //console.log();
}

function roundResult(num) {
    return Math.round(num);
}

function calculations(operator) {
    if (currentOp !== null) evaluate();
    num1 = display.innerText;
    currentOp = operator;

}
console.log(operate("+", 2, 3));
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


//What calculator has

/**
 *Display: 
 - should display number inputs
 - should display operator inputs
 - should display results
 *Buttons:
 - should contain numbers 1 - 10 and decimal point "."
 - should contain operators (+ - * / =)
 - should contain delete and clear buttons
 *Functionalilties:
 - operators should work as inetended
 - there should be a function for displays
 - there should be function for calculations
 */

 const display = document.querySelector('.display');
 const opDisplay = document.querySelector('.operator-display');
 const calcDisplay = document.querySelector('.calculations');
 const resultDisplay = document.querySelector('.result');
 const buttons = Array.from(document.querySelectorAll('.keys'));

 let result = 0;
 let num1 = ""; //initial number input
 let num2 = ""; //next number input
 let currCalc = ""; //current calculation
 let currOp = ""; // current operator

 //Functions

 function add(a,b){
    a + b;
 }

 function subtract(a,b) {
    a - b;
 }

 function divide(a,b){
    a / b;
 }

 function multiply(a,b){
    a * b;
 }

 //Display
 //to access the display area we'll need to delegate events to the buttons

 buttons.forEach((button)=> {
    button.addEventListener('click', (e)=>{
        if (e.target.classList.contains("num")){
           calcDisplay.textContent += e.target.textContent;
        } else if(e.target.classList.contains("operator")) {
            opDisplay.textContent = e.target.textContent;
        } else if(e.target.innerText === "=") {
            resultDisplay.textContent = "That's your answer!"
        }
    })
 })
