const i = prompt("Enter a number(nature number)")
let factorial = 1;
for(let n=1;n<=i;n++){
    factorial = factorial*(n);
}
alert(`${i}! = ${factorial}`);