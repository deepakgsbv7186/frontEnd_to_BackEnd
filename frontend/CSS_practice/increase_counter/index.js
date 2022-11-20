// let show = document.getElementById('display').innerHTML;
// show += " Hello";
// document.getElementById('display').innerHTML = show;
// console.log(show);
let counter = 1;
let color_red = "#B01E68";
let color_yellow = "#FFE15D";
// let color_pick = document.body.style.backgroundColor;
color_pick = "blue";
function increaseCounter(){
    document.getElementById('display').innerHTML = counter;
    counter++;
    (counter%2==0)?
    document.body.style.backgroundColor=color_red:
    document.body.style.backgroundColor=color_yellow;
}
console.log(typeof(counter));