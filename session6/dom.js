let h1 = document.getElementById('first-h1');
h1.innerText = "DEMO HEADING ELEMENT";

let h2 = `<h2>Heading level 2</h2>`
let div = document.getElementById('demo-div');

div.innerHTML += h2;

let anchor = document.getElementById('demo-anchor')
anchor.remove();

h1.addEventListener('click', () => {
    console.log("may vua click dung khong?")
})