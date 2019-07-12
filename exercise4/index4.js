// const n = math.floor(math.random()*100);
const n = 25;

const x = number(prompt("enter number"));

if(x < n) {
    alert("too small")
} else if (x > n){
    alert("too large")
} else if (x === n) {
    alert("bingo!")
}