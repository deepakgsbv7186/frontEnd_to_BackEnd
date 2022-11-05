// Math.random() -> generates random number between (0,1)
// for example 0.5566646456, 0.93384849 

// program to generate four-digit OTP number
const randomNumber = Math.random();
const otp = Math.round(randomNumber*9000 + 1000);

//console.log("Your 4-digit OTP: "+ otp);
console.log("Your 4-digit OTP: ${otp}");