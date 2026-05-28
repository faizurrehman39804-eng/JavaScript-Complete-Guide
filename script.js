// External JavaScript definition:
// alert('This is an external JavaScript alert!');

// ⭕⭕⭕✨✨✨variables in JavaScript
// 1️⃣var
// var a = "hooo";
// console.log(a);

// 2️⃣let 
// let b = "hooo";
// console.log(b);

// let c = "hooo";
// console.log(c);

//3️⃣const `
// const d = "hooo";
//  d = "hooo";
// const d = "hooo";
// console.log(d);

//⭕⭕⭕✨✨✨4️⃣Data Types
// var x = "faiz ur rehman";
// var x = 30;  
// var x = true;  
// var x = null;
// var x = undefined;
// var x = ["faiz ur rehman", "Peter", "true", "null", "undefined"];

// document.write(x);

//⭕⭕⭕✨✨✨5️⃣Arithmetic Operators
// +
// var a = 5;
// var b = 5;
// var sum = a + b;

// document.write(sum);

// -
// var a = 15;
// var b = 5;
// var sum = a - b;
// 
// document.write(sum);

// *division {5x5=25}
// var a = 5;
// var b = 5;
// var sum = a * b;
// document.write(sum);

// /division {}

//⭕⭕⭕✨✨✨5️⃣comparison Operators 
// 1️⃣ == equal to{check da value only}
// var a = 5;
// var b = 5;//true
// var b = "6";//false
// document.write(a == b);
// --------------------------------------------------------------------------
// 2️⃣ === equal value and equal type hona cahia 
// var a = 5;
// var b = "5";// false
// var b = 5;// true
// document.write(a === b);
// --------------------------------------------------------------------------
// 3️⃣ != not equal to
// var a = 5;
// var b = 5;// false
// var b = 6;// true
// document.write(a != b);
// --------------------------------------------------------------------------
// 4️⃣ !== not equal value or not equal type
// var a = 5;
// var b = "5";// true
// var b = 5;// false
// document.write(a !== b);
// --------------------------------------------------------------------------
// 5️⃣ > greater than
// var a = 5;
// var b = 6;//false
// var b = 4;//true
// document.write(a > b);
// --------------------------------------------------------------------------
// 6️⃣ < less than
// var a = 5;
// var b = 6;//true
// var b = 4;//false
// document.write(a < b);
// --------------------------------------------------------------------------
// 1️⃣if % else satatment 
// var a = 5;
// var b = "5";

// if (a === b) {
// if (a < b){
//   alert("a is greater than b");
// } else {
//   alert("opsssssssssss");
// }
// --------------------------------------------------------------------------
//⭕⭕⭕✨✨✨6️⃣Logical Operators
//  && operator in 
// var x = 5;
// var y = 7;

// document.write(x > 3 && y > 5); // true
// document.write(x > 3 && y > 9); // false
// --------------------------------------------------------------------------
// || operator
// var x = 5;
// var y = 7;

// document.write(x > 3 || y > 9); // true 1 value sahi ha 
// document.write(x < 3 || y < 5); // false 2 ghalat ha
// --------------------------------------------------------------------------
// ! operator
// var x = 5;
// var y = 7;

// document.write(!(x > 3)); // false
// document.write(!(y > 9)); // true
//⭕⭕⭕✨✨✨6️🔟if else satatment
// let a = 5;
// let b = 10;

// if (a > b) {
//   document.write("a is less");
// }else 
//  document.write("b is greater");


// let a = "100";// string return error
// let a = 100;// same data type correct
// let b = 100;

// if (a === b) {
//   document.write("a is equal to b and same type");
//  }else 
//   document.write("b is equal to a but not same type");

// if esle if satatment eaxcpale like sfterwer
// let age = 19;

// if (age < 18) {
//   document.write("20% discount");
// } else if (age >= 18 && age <= 20) {
//   document.write("10% discount");
// } else {
//   document.write("No discount");
// }

// ternary operator
// var age = 19;
// var x = 10;
//   x = (age < 20) ? "True" :  "false"; 

// document.write(x);


// switch statement
var day = 2;

switch (day) {
  case 1:
    document.write("Monday");
    break;
  case 2:
    document.write("Tuesday");
    break;
  case 3:
    document.write("Wednesday");
    break;
  default:
    document.write("Invalid day");
}

