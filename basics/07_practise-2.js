// Practise Set :2

// Q1:- use logical operator to find weather the age of a person lies between 10 and 20?

//let age = prompt("What is your age?")
age = Number.parseInt(age)
if(age >10 && age<20){
    console.log("your age is lies between 10 and 20")
}
else{
    console.log("your age dosent lies between 10 and 20")
}

//Q2:- demonstrate the use of switch case statement in java script

//let age = prompt("What is your age?")
switch (age) {
    case '12':
        console.log("your age is 12")
        break
    case '13':
        console.log("your age is 13")
        break
    case '14':
        console.log("your age is 14")
        break
    case '15':
        console.log("your age is 15")
        break
    default:
        console.log("Your age is not special")
}

//Q3:- write a javascript program to find weather a number is divisible by 2 and 3
let num= prompt("What is your age?")
num= Number.parseInt(num)
if(num % 2 == 0 && num % 3 == 0) {
    console.log("Your number is divisible by 2 and 3")
}
else{
    console.log("Your number is not divisible by 2 and 3")
}

//Q4:- write a javascript program to find weather a number is divisible by either 2 or 3


//Q5:- print " you can drive" or "you cannot drive" based on age being greater than 18 using ternanry operator
let age = 19 
let a = age > 18? "you can drive" : "you cannot drive"
console.log(a)