const a = prompt("Nhập cân nặng của bạn(kg)")
const b = prompt("nhập chiều cao của bạn(cm)")
const c = b/100;
let bmi = a/c**2;
let i = ("béo phì");

if(bmi < 16){
    i = "rất gầy";       
}
else if(bmi < 18.5){
    i = "hơi gầy";
}
else if(bmi < 25){
    i = "bình thường";
}
else if(bmi < 30){
    i = "hơi béo";
}
alert(`Chỉ số BMI của bạn là: ${bmi}\nMình thấy bạn ${i}`); 





