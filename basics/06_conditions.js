let a = prompt("Het whatrs you age")  //prompt will ask you 

a = Number.parseInt(a) //converts the string into to a numbers
//console.log(typeof a)

//************ If *************/
if(a>0){
    alert("This is a valid age"); //alry will inform you
}

//**************** If-Else ***********/
if(a>0){
    alert("This is a valid age");
}
else{
    alert("This is an invalid age");
}

//**************** If-Else-If
if(a<9){
    alert("This is a valid age");
}
else if(a<9){
    alert("you are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
    alert("you are a kid and you can even think of driving after 18");
}
else{
    alert("you can now drive as you are above 18");
}
console.log("Done")

//******** Ternary Operator **************
console.log("you can", (a<18? "not drive" :"drive"))

// HomeWork:- Explores switchstatement and write a basic program in the comment
