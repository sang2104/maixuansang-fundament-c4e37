let low = 0;
let high = 100;

for(;;){
    let mid = math.floor((low + high)/2);
    const answer = prompt('Is ${mid} your number?').toLocaleLowerCase();

    if (answer === "s"){
        low = mid;
    }
    else if (answer == "l"){
            high = mid;
        }
            else if (answer === "c"){
            alert("i knew it!")
        }
    }
    
