
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



 //const calcDisplay = document.querySelector('.calculations');
 const buttons = Array.from(document.querySelectorAll('.keys'));
 const numKeys = Array.from(document.querySelectorAll('.num'));
 const opKeys = Array.from(document.querySelectorAll('.operator'));
 const contKeys = Array.from(document.querySelectorAll('.control'));
 const decimal = document.querySelector('.point')
 const greeting = document.querySelector('.greet');
 const resultDisplay = document.querySelector('result');

/*
 let result = 0;
 let num1 = ""; 
 let num2 = ""; 
 let currCalc = ""; 
 let currOp = null;
 let resetScreen = false;
*/
 //the new guy
 
 calculate = {
    displayVal: '',
    num1: null,
    waitForNum2: false,
    operator: null
 }

 function updateDisp() {
    const disp = document.querySelector('.calculations');
    disp.textContent = calculate.displayVal;
}


updateDisp();

const performCalc = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
    '/': (num1, num2) => num1 / num2,
    '=': (num2) => num2
  };

 numKeys.forEach((numKey)=>{
    numKey.addEventListener('click', ()=>{
       inputNumber(numKey.textContent);
       updateDisp();
    })
 });

opKeys.forEach((opKey)=>{
    opKey.addEventListener('click', ()=> {
        manageOperator(opKey.textContent);
        const opDisplay = document.querySelector(".operator-display")
        opDisplay.textContent = opKey.textContent;
        if (opKey.textContent === "=") {
            opDisplay.textContent = "";
        }
        updateDisp();
    });
});

contKeys.forEach((contKey)=>{
    contKey.addEventListener('click', (e)=>{
        if (e.target.textContent === "Clear") {
            clearAll();
            updateDisp();
        } else if (e.target.textContent === "DEL") {
            deleter();
            updateDisp();
        } else if (e.target.textContent === "Greeting!") {
            resultDisplay.textContent = "Hello";
        }
    });
});

decimal.addEventListener('click', (e)=>{
    if (e.target.textContent === ".") {
        inputDecimal();
        updateDisp();
    }
})

function clearAll() {
    const opDisplay = document.querySelector(".operator-display");

    calculate.displayVal = '';
    calculate.num1 = null;
    calculate.waitForNum2 = false;
    calculate.operator = null;
    opDisplay.textContent = "";
}


function deleter(){
    calculate.displayVal = calculate.displayVal.slice(0,-1);
}

function inputNumber(number){
    const {displayVal, waitForNum2} = calculate;
    if (waitForNum2 === true){
        calculate.displayVal = number;
        calculate.waitForNum2 = false;
    } else {
        calculate.displayVal = displayVal === "" ? number : displayVal + number;
    }
    return calculate;
}
function inputDecimal() {
    //Only if the `dispValue` does not contain a decimal point, append the decimal
    let decimal = ".";

        if (!calculate.displayVal.includes(decimal)) {
            calculate.displayVal += decimal;
        } 
  }
function  manageOperator(oper){
    const {num1, displayVal, operator} = calculate;
    const input = parseFloat(displayVal);
    if(num1 === null) {
    calculate.num1 = input;
    } else if(operator){
    const output = performCalc[operator](num1, input);
    calculate.displayVal = String(output);
    calculate.num1 = output;
    }
    calculate.waitForNum2 = true;
    calculate.operator = oper;
    return calculate;
}
