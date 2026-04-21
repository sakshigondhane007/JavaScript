//******* For Loop ************/
for (let i = 0; i < 50; i++) {
    console.log(i+1)
}

//program to add first n natural numbers
/*
let sum = 0
let n = prompt("Enter the value of n ")
n = Number.parseInt(n)
for (let i = 0; i < n; i++) {
    sum += (i + 1)
    console.log(i+1), "+"
}
console.log("Sum of first " + n + " natural number is " + sum)
*/

//HOmework: Write a program to calculate factorial

//***************** For-In Loop **********/
let obj = {
    sakshi: 90,
    jay: 80,
    shubh: 56,
    shivika: 45,
    shiv: 23
}
for (let a in obj){
    console.log("Marks of " + a + " are " + obj[a])
}

//******************* For-Of Loop ***********/
for (let b of "Sakshi"){
    console.log(b)
}