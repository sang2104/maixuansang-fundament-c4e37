// let numbers =[7,5,9,-3,0 ]
// let n = Number(prompt("enter a number"));
// let indexOfN = -1;

// numbers.forEach((number, index) => {
//     if (number === n){
//         indexOfN = index;

//     }
// });

// if (indexOfN === -1) {
//     alert("Not found")
// }else{
//     alert(`${n} at ${indexOfN}`)
// }




let numbers =[7,5,9,-3,0,9,9,5,7 ]
let n = Number(prompt("enter a number"));
let indexOfN = [];

numbers.forEach((number, index) => {
    if (number === n){
        indexOfN.push(index);

    }
});

if (indexOfN.length === 0) {
    alert("Not found")
}else{
    alert(`Number ${n} at ${indexOfN}`)
}