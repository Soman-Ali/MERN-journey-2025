// 1. Function Expression Hoisting
// console.log(typeof test);
// var test = function() { return 5; };
//answr is undefined bcz its hosting concept 

// 2. Lexical Scoping with Let and Var
// let x = 5;
// function scopeTest() {
//   console.log(x);
//   var x = 10;
// }
// scopeTest();
// answ is undefined bcz line no 8 initialize befone declaring 


// variables & Data types
// Variables > Named memory location
    // Var,let,const

// Data types > types of data 
    // primitive data types => Number, Null, symbol, string, bigint, boolean, undefined
    // Non- primitive Datatypes => Object, Arrays



// Operators and conditional statement 
// Operators are used to perform operation

// Types of operators:.
// Arithmatic =>{+,-,*,/,%,**,++,--}
// Assignment =>{+=,-=,*=, etc}
// comparison   =>{>,<,>=,<=,==,!=,===,!==}
// logical =>{&&,||,!}
// Bitwise  =>{&,|,!,^,~,>>,<<}
// Ternary =>{?,:}

// Conditional Statement

// if, else if, else
// let a=5;
// if( a == 1){
//     console.log(a);
// }
// else if(a==2){
//     console.log(b);
// }
// else if(a==3){
//     console.log(c);
// }
// else if(a==4){
//     console.log(d);
// }
// else{
//     console.log(e);
// }

// answer is (e)

// swicth

// let num=5;
// switch(num){
//     case 1: console.log('a'); 
//     break;
//     case 2: console.log('b');
//     break; 
//     case 3: console.log('c'); 
//     break;
//     case 4: console.log('d'); 
//     break;
//     default : console.log('e'); 
// }



//////////////////////////////////////////////////////////////////////////////////

// loops and strings

// for(let i =0 ; i<=10 ; i++){
//     console.log(javascript);
// }
// ans is print 10 times javascript

// break condintion in loop

// for(let i=1 ; i<=6; i++){
//     if(i==4){
//         break;
//     }
//     console.log(i)
// }
// ans is 1,2,3 bcz break condition do not allow to print == to 4 thats why print only ,1 ,2 ,3

//continue condition in loop

// for(let i=1;i<=6;i++){
//     if(i==4){
//         continue;
//     }
//     console.log(i)
// }
// // answer is 1,2,3,5,6 skip 4 


// strings in javascript
// let firstName = "sobaan";
// console.log(firstName);

// concatinate strings
// let firstName = "sobaan";
// let lastName = "qureshi";
// let fullName = firstName + " " + lastName;

// console.log(fullName);

// //Output :sobaan qureshi

// ```template literals in string
// let number1 = 10;
// let number2 = 20;

// let sum = number1 + number2;

// // console.log(`The sum of ${number1} + ${number2} is equal to ${sum}`);
// console.log(`the sum of ${number1}+${number2} is equal to ${sum}`);

//Output : The sum of 10 + 20 is equal to 30
