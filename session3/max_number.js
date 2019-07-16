let numbers = [5,8,95,3,5,7,1,-6,-4]
let max = numbers[0];

for(let i = 0; i < numbers.length; i++){
    if (numbers[i] > max){
        max = numbers[i];
    }
}
  
console.log(max);
