const a = prompt("nhap a");
const b = prompt("nhap b");
const c = prompt("nhap c")
delta = (b**2) - 4*a*c;
if (delta < 0){
    console.log("no value");
}
else if (delta == 0){
    console.log("double value");
const x = -b/(2*a);
console.log('phuong trinh vo co nghiem kepla ${x}')//bac
} else{
    console.log("2 value")
const x1 =(-b - delta**0.5)/(2*a);
const x2 =(-b +delta**0.5)/(2*a);
console.log('phuong trinh co 2 nghiem laf ${x1} va ${x2}');}