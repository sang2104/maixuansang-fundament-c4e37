let x = Math.floor(Math.random() * 11);
let y = Math.floor(Math.random() * 11);
let Operators = ["+","-","*","/"] ;
let indexOp = Math.floor(Math.random()*Operators.length);
let op = Operators[indexOp];

let result = 0;

if (op === "+"){
    result = x + y
}else if (op === "-"){
    result = x + y;
}else if (op === "*"){
    result = x * y;
}else if (op === "/"){
    result = x / y;
}

let errors = [-1, 0, 1];
let indexOfError = Math.floor(Math.random()*errors.length);
let errNumber = errors[indexOfError];
let displayResult = result + errNumber;

console.log(`${x} ${op} ${y} = ${displayResult}`)

let answer = prompt("(Y/N)?").toLocaleLowerCase();
let notice = '';
if(errNumber === 0){
    if (answer === 'y'){
        notice = "congrat";
    }else if (answer === 'n'){
    notice = "wrong";
    }
    }else{
    if ( answer === 'y'){
        notice = "wrong";
    }else if (answer === 'n'){
        notice = "congrat"
    }
}


