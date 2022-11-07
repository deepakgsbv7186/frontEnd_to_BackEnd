// print a simple star pattern with 5*5 box 

let i,j;
let star = "";

/*
Create a empty string which is going to store all the data 
and at last we just need to call the string i.e., array
which display the pattern
*/
for(i=0;i<5;i++){
    for(j=0;j<5;j++){
        star += " * ";
    }
    star += "\n";
}
console.log(star);