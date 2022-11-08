// print pyramid with less use of for loops

let star = "";
let num = 10, incrementBy = 1;

for(let i=1; i<=num; i++){
    // first print the spaces
    for(let j=1; j<=num-i; j++){
        star += "   ";
    }

    // now print the star with odd numbers as 1,3,5,7 and so on
    // we can acheive this by using "incrementBy = incrementBy + 2"
    for(let k=1; k<=incrementBy; k++){
        star += " * ";
    }
    star += "\n";
    incrementBy += 2;
}

console.log(star);