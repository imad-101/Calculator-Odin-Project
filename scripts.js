const currentScreen = document.querySelector('.current');
const previousScreen = document.querySelector('.previous');
const oppScreen = document.querySelector('.oppscreen')
const numbersBtn = document.querySelectorAll('.num');
const delBtn = document.querySelector('#delete');
const clearBtn = document.querySelector('#clear');
const operatorBtn = document.querySelectorAll(".operators");
const equalBtn = document.querySelector('#equal');
const decimleBtn = document.querySelector('#decimle');

numbersBtn.forEach((number) => {
    number.addEventListener('click' , (e)=>{
        handleNumber(e.target.textContent)
    })
})
operatorBtn.forEach((opp) => {
    opp.addEventListener('click' , (e)=>{
        handleOperator(e.target.textContent)
    })   
})
equalBtn.addEventListener('click', ()=> {
    operate();
})
clearBtn.addEventListener('click', ()=>{
    currentScreen.textContent = "";
    previousScreen.textContent = "";
    oppScreen.textContent = "";
})
decimleBtn.addEventListener('click' , ()=>{
    if(!currentScreen.textContent.includes(".")){
        currentScreen.textContent += "."
    }
})
delBtn.addEventListener('click' , ()=>{
    valueToSlice = currentScreen.textContent;
    valueToSlice = valueToSlice.slice(0, -1);
    currentScreen.textContent = valueToSlice;
})
function handleNumber(number){
    if(currentScreen.textContent.length <= 6){
        currentScreen.textContent += number;
    }

}
function handleOperator(opp){
    oppScreen.textContent = opp;
    previousScreen.textContent = currentScreen.textContent;
    currentScreen.textContent = "";
    
}
function operate(){
    operator = oppScreen.textContent;
    previousValue = Number(previousScreen.textContent);
    currentValue = Number(currentScreen.textContent);
    let result = "";

    if(operator == "+"){
        result = previousValue += currentValue;
    }
    else if(operator == "-"){
        result = previousValue -= currentValue;
    }
    else if(operator == "*"){
        result = previousValue *= currentValue;
    }
    else if(operator == "/"){
        result = previousValue /= currentValue;
    }
    result = roundNumber(result);
    currentScreen.textContent = result;
    previousScreen.textContent = "";
    oppScreen.textContent = "";
    
}
function roundNumber(num){
   return Math.round(num * 1000)/1000;
}