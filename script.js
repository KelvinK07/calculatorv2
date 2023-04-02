let commaAvailable = true;
// checker function
const checker = (val) =>{
    const equation = ['+',"-","×","÷","%"];
    return equation.includes(val);
}
// clear function
const clearResult = () =>{
    let result = document.getElementById("result");
    result.innerHTML = 0;
    commaAvailable = true
}
// add number function
const addNumber = (number) =>{
    let result = document.getElementById("result");
    if (result.innerHTML == 0){
        result.innerHTML = number;
    }
    else{
        result.innerHTML += number;
    }
}
// add equation function
const addEquation = (equation) =>{
    let result = document.getElementById("result");
    if(result.innerHTML !== 0 && !checker(result.innerHTML[result.innerHTML.length-1])){
        result.innerHTML += equation;
        commaAvailable = true;
    }
}
// Add Coma Function
const addComma = () =>{
    let result = document.getElementById("result");
    if(!checker(result.innerHTML[result.innerHTML.length-1]) && commaAvailable){
        result.innerHTML += ".";
        commaAvailable = false;
    }
}
// change Symbols Function
const changeSymbol = () =>{
    let result = document.getElementById("result");
    if(result.innerHTML != 0 && !checker(result.innerHTML[result.innerHTML.length-1])){
        let input = result.innerHTML;
        input = eval(input)
        if (input[0] == "-"){
            input = input.slice(1);
        }
        else{
            input = -input;
        }
        result.innerHTML = input;
    };
}
// Percentage Fuction
const percentage = () =>{
    let result = document.getElementById("result");
    if(!checker(result.innerHTML[result.innerHTML.length-1])){
        let input = eval(result.innerHTML);
        input += "/100"
        result.innerHTML = eval(input)
        commaAvailable = false;
    }
}
//Equal Function
const equalFunction = () =>{
    let result = document.getElementById("result");
    if(result.innerHTML != 0 && !checker(result.innerHTML[result.innerHTML.length-1])){
        let input = result.innerHTML
        input = input.replace("÷","/")
        input = input.replace("×","*")

        result.innerHTML = eval(input);
    }
}