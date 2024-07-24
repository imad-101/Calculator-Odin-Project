const screen = document.querySelector('.screen');
const numbersBtn = document.querySelectorAll('.num');
const delBtn = document.querySelector('#delete');
const clearBtn = document.querySelector('#clear');
const operatorBtn = document.querySelectorAll(".operators");
const equalBtn = document.querySelector('#equal');
const decimleBtn = document.querySelector('#decimle');
let operator = "";
let number = '';
numbersBtn.forEach((button => {
    button.addEventListener('click', (e) =>{
        handleNumber(e.target.textContent)
    })
}))
operatorBtn.forEach((operator => {
    operator.addEventListener('click', (e) =>{
        handleOperator(e.target.textContent)
    })
}))
equalBtn.addEventListener('click', function(){
    calculate();
})

function handleOperator(opp){
    screen.textContent += opp;
    operator = opp;
    
}
function handleNumber(num){
    screen.textContent += num;
    number = num;
}
function calculate(){
    number = parseFloat(number);
    if (operator == "+"){
        number += number
        console.log(number)
    }
    else if (operator == "/"){
        number /= number
        console.log(number)
    }


}