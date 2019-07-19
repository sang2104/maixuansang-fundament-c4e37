
let price = {
    banana: "4",
    apple: "2",
    orange: "1.5",
    pear: "3"
};
let stock = {
    banana: "6",
    apple: "0",
    orange: "32",
    pear: "15"
}

let items = Object.keys(price);
let total = 0;

items.forEach((item,index)=>{
    console.log(`${item} 
    Price: ${price[item]} 
    Stock: ${stock[item]}`)
total = total + price[item]*stock[item];
})
console.log(`Total: ${total}`);
