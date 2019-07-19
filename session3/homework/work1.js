let menu = ["T-Shirt", "Sweater"];
for(;;){
menu.forEach((clothes, index) => {
    console.log(`${index+1}. ${clothes}`);
})

let answer = promt(`Welcome to our shop, what do you want (C, R, U, D)?`).toLowerCase();

if (answer === `R`){
for(let i = 0; i < menu.length; i++){
    console.log(menu[i])
}
}else if (answer === `C`){
    let newclothes = prompt(`Clothes name?`);
    menu.push(newclothes);
}
else if(answer === `U`){
    menu[1] = "Skirt";
    console.log(menu)
}else if(answer === `D`){
    menu.splice(2, 1);
console.log(menu);
    }
}    

   