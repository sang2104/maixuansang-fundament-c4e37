let menu = ["com", "canh", "tom", "rau", "ca"];

menu.forEach((food, index) => {
    console.log(`${index+1}. ${food}`);
})

let answer = promt("add food? (Y/N)").toLowerCase();

if (answer === `n`){
    alert("good bye!")
}else if (answer === `y`){
    let newFood = prompt("Food name?");
    menu.push(newFood);
}

menu.forEach((food, index) => {
    console.log(`${index}. ${food}`)
})