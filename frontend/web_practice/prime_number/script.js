// program to tell whether the provided number is prime or not

// user input here

console.log("Welcome to prime");

function isPrime(){
    const u_input = parseInt(document.getElementById("u_input_p").value);
    console.log(typeof(u_input));
    // document.getElementById("displayResult").innerHTML = u_input;
    // as we know 1,2 are prime
    // so we need to check for other number excluding these two
    let startFrom = 2;
    if(startFrom<u_input){
        while(startFrom<u_input){
            if(u_input%startFrom == 0){
                document.getElementById('displayResult').innerHTML = "Not";
                return;
            }
            startFrom++;
        }
        document.getElementById('displayResult').innerHTML = "Prime";
    }
    else{
        document.getElementById('displayResult').innerHTML = "Please check the input again...";
    }
}



// Not working (in progres)
// function isPrime(){
//     const u_input = parseInt(document.getElementById("u_input_p").value);
//     console.log(typeof(u_input));
//     // document.getElementById("displayResult").innerHTML = u_input;
//     // as we know 1,2 are prime
//     // so we need to check for other number excluding these two
//     let startFrom = 2;
//     if(startFrom<u_input){
//         while(startFrom<u_input){
//             if(u_input%startFrom == 0){
//                 return("Not");
//             }
//             startFrom++;
//         }
//         return("Prime");
//     }
//     else{
//         return("Please check the input again...");
//     }
// }
// document.getElementById("displayResult").innerHTML = isPrime();