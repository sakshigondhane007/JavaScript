// 77;
// "Sakshi"
// false

console.log("Operators in js")

//*********Arthmetic Operators ************/
let a = 45;
let b = 4;
console.log("a + b =", a+b)
console.log("a - b =", a-b)
console.log("a / b =", a/b)
console.log("a % b =", a%b)
console.log("a * b =", a*b)
console.log("a ** b =", a**b) //(45*45*45*45)
console.log("++a  =", ++a) 
console.log("a++ =", a++) 
console.log("--a =", --a) 
console.log("a-- =", a--) 
console.log("a =", a) 
console.log("a-- =", a--) 

//*********** Assignment Operator *********/
let assignment = 5;

assignment += 5      // same as assignment = assignment + 5
console.log("a is now =", assignment)

assignment = 5     // same as assignment = assignment = 5
console.log("a is now =", assignment)

assignment -= 5      // same as assignment = assignment - 5
console.log("a is now =", assignment)

assignment *= 5      // same as assignment = assignment * 5
console.log("a is now =", assignment)

assignment /= 5      // same as assignment = assignment / 5
console.log("a is now =", assignment)

assignment %= 5      // same as assignment = assignment % 5
console.log("a is now =", assignment)

assignment **= 5     // same as assignment = assignment ** 5
console.log("a is now =", assignment)


//*************** Comparison Operator ***************/

let comp1 = 6;
let comp2 = "6";
console.log("comp1 == comp2 is ", comp1 == comp2)
console.log("comp1 != comp2 is ", comp1 != comp2)
console.log("comp1 === comp2 is ", comp1 === comp2)
console.log("comp1 !== comp2 is ", comp1 !== comp2)
console.log("comp1 > comp2 is ", comp1 > comp2)


//******************** Logical Operator ***********/
let x = 5;
let y = 6;
console.log(x<y && x==5)
console.log(x>y || x==5)
console.log(!false)
console.log(!true)

//******* Comments ************

// This is a single line comment
/*This is a sample Multiline comment */