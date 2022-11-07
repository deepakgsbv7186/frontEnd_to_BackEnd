// print left triangle star pattern

let i,j;
let star = "";
for(i=0;i<5;i++){
    for(j=0;j<=i;j++){
        star += " * ";
    }
    star += "\n";
}
console.log(star);