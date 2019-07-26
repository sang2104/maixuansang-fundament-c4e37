// document.getElementById("getTheLink").addEventListener("click", function(){
//     let href =  document.getElementById("href").href;
//     console.log(href);
//     document.getElementById("link").value = href;
//  })
//  document.getElementById("se").addEventListener('click', function () {
//     let select = document.getElementById("select");
//    let value = document.getElementById("select").value;
//    for (let i=0;i<select.childElementCount;i++){
//     if (value === select[i].value){
//          select[i].remove();
//       }
//    }
 
//    console.dir (value);
//  })
//  document.getElementById("table").addEventListener("click", function (){
//  let column = Number(document.getElementById("column").value)-1; 
//  let row = Number(document.getElementById("row").value) -1; 
//  let content = document.getElementById("content").value; 
//  let table = document.getElementById("list");
//  table.children[0].children[column].children[row].innerHTML = content;
//  })
//  © 2019 GitHub, Inc.

let indexA = document.getElementById("demo-a")
console.log(indexA.href);
let inputText = document.getElementById("demo-input") 
let btn = document.getElementById("btn-demo");
console.log(inputText);
btn.addEventListener('click', () => {
    inputText.value = indexA.href;
})


let listOfColor = document.getElementById("listOfColor");



function remove() {
    let x = document.getElementById("listOfColor");

    x.remove(x.selectedIndex);
}