// print pyramid

let star = "";
let num = 10;

for(let i=1; i<=num; i++){
    // add spaces
    for( let j=1; j<=num-i; j++){
        star += "   ";
    }

    // print star
    for(let k=1; k<=i; k++){
        star += " * ";
    }

    // print rest of the star
    for(let m=2; m<=i; m++){
        star += " * ";
    }

    star += "\n";
}

console.log(star);