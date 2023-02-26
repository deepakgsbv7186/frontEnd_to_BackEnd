const count = document.querySelector('.count');
const buttons = document.querySelector('.buttons');

// add event listener with conditions
buttons.addEventListener("click", (e) =>{
    if(e.target.classList.contains("add")){
        count.innerHTML++;
        setColor();
    }
    if(e.target.classList.contains("reset")){
        count.innerHTML = 0;
        setColor();
    }
    if(e.target.classList.contains("subtract")){
        count.innerHTML--;
        setColor();
    }
});

// set color on counter
function setColor(){
    if (count.innerHTML > 0){
        count.style.color = "green";
    } else if (count.innerHTML < 0){
        count.style.color = "orangered";
    }else{
        count.style.color = "white";
    }
}