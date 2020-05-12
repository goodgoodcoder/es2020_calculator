const input = document.querySelector("#input");
const clearButton = document.querySelector("#clear");
const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const calculateButton = document.querySelector("#calculate");
const result = document.querySelector("#result");
let temp, operator;

function plus() {
    if(input.value) {
        temp = input.value;
        operator = "+";
    } else if(operator) {
        alert("ERROR!");
        clear();
    }
    input.value="";
    input.focus();
}

function minus() {
    if(input.value) {
        temp = input.value;
        operator = "-";
    } else if(operator) {
        alert("ERROR!");
        clear();
    }
    input.value="";
    input.focus();
}

function multiply() {
    if(input.value) {
        temp = input.value;
        operator = "*";
    } else if(operator) {
        alert("ERROR!");
        clear();
    }
    input.value="";
    input.focus();
}

function divide() {
    if(input.value) {
        temp = input.value;
        operator = "/";
    } else if(operator) {
        alert("ERROR!");
        clear();
    }
    input.value="";
    input.focus();
}

function clear() {
    input.value = "";
    input.focus();
    temp = null;
    operator = null;
    result.value="";
}

function calculate() {
    if(operator) {
        if(input.value) {
            switch(operator) {
                case '+': 
                    result.value = Number(temp) + Number(input.value);
                    break;
                case '-': 
                    result.value = Number(temp) - Number(input.value);
                    break;
                case '*': 
                    result.value = Number(temp) * Number(input.value);
                    break;
                case '/': 
                    result.value = Number(temp) / Number(input.value);
                    break;
            }
            input.value=result.value;
            temp = result.value;
            operator=null;
            input.focus();
        } else {
            alert("ERROR!");
            clear();
        }
    } else if(input.value) {
            result.value = input.value;
            temp=result.value;
            operator=null;
            input.focus();
    }
}

function init() {
    plusButton.addEventListener("click", plus);
    minusButton.addEventListener("click", minus);
    multiplyButton.addEventListener("click", multiply);
    divideButton.addEventListener("click", divide);
    calculateButton.addEventListener("click", calculate);
    clearButton.addEventListener("click", clear);
}
init();