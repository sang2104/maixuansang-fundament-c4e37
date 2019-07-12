// for (let index = 1; index < 101; index++){
//     if (index % 2 === 0){
//         console.log(index);
//     }
// }
const n = prompt("nhap so can kiem tra co phai so nguyen to khong")

let isprime = true;

if (n < 2){
    isprime = false;
} else {
    for (let index = 2; index < n; index++){
        if(n % index === 0) {
            isprime = false;
            break
        }
    }
}

if(isprime === true) {
    console.log("prime!")
}