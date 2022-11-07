// print right triangle star pattern

let i,j,k;
let star = "";
let n = 5;
for(i=0;i<n;i++){
    for(j=0;j<n-i;j++){
        star += "   ";
    }
    for(k=0;k<i;k++){
        star += " * ";
    }
    star += "\n";
}

console.log(star);