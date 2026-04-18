// Practise set :1

//Q1: create a variable of type string and try to add a number to it.
let a = "sakshi"
let b = 6
console.log(a + b)

//Q2: use type of operator to find the datatypes of the string in last question
console.log(typeof (a+b))

//Q3: create a const object in javascript can you change it to hold a number later?
const c = {
    name: "sakshi",
    section: 1,
    isPrincipal: false  //key value is change but object is does not change
}

//c = 54  //can not be changed , cannot add number
//a1 = {} can not add string

//Q4: try to add a new key to the const object in problem 3. were you able to do it?
c['friend'] = "Jay"
c['name'] = "gayatri"
console.log(c)

//Q5: write a js program to create a word-meaning dictionary of 5 words.
const dict = {
    appreciate: "recognize the full worth of.",
    ataraxia: "a state of freedom from emotional disturbance and anxiety",
    yakka: "work, especially hard work."
}

console.log(dict.yakka)
console.log(['yakka'])  // access by two type of syntax