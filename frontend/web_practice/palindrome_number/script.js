console.log("beta");

// program -> palindrome number
function getUserdata(){
    // const user_input = document.getElementById('user_input').value;
    const user_input = parseInt(document.getElementById('user_input').value);
    const displayOnHTML = document.getElementById('display');
    if (user_input<0){
        displayOnHTML.innerHTML = "Please input valid number.";
        return;
    }
    displayOnHTML.innerHTML = isPalindrome(user_input);
}
function isPalindrome(dummy_input){
    let reverse = 0;
    let di = dummy_input;
    while(di != 0 ){
        // extract last number
        let rem = di % 10;
        // multiple by 10 until all digit
        reverse = reverse * 10 + rem;
        // remove the last digit
        // javascript needs to convert into number int type to remove float values
        di = parseInt(di / 10);
    }
    console.log("Reverse is " + reverse);
    if(dummy_input == reverse){
        return "It's palindrome";
    }
    else{
        return("Here's reverse: " + reverse);
    }
}