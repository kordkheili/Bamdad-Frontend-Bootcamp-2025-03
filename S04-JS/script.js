// alert("Salam Khubi?!");

/*
alert("Ghorbunet");
alert("Eradat");
*/

//! javascript is typeless language
let a = 20; // integer
let b = 10; // integer
let c = "30"; // string

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
console.log(a + b + c);
console.log(a + (b + c));

let firstname = "Alireza"; // string

console.log(firstname);
console.log(a + firstname);
console.log(a * firstname);
console.log(a / firstname);
console.log(a - firstname);

let isMale = true; // boolean
let isFemale = false; // boolean
console.log(isMale);

//! javascript case style → camelCase
document.getElementsByClassName("test");

console.log(a);
a = 40;
console.log(a);
a = "mohammadi";
console.log(a);

const x = 100;
console.log(x);
// x = 101; //! TypeError: Assignment to constant variable.

console.log(100 / 0);

//! example (age)
let age = prompt("سن خود را وارد نمایید");
while (!age) {
  age = prompt("سن خود را وارد نمایید");
}
console.log(age, typeof age);

age = parseFloat(age);
age = +age;
console.log(age, typeof age);

console.log(1404 - +age);

//! control flow 👇
console.log(2 > 1);
console.log(2 >= 2);
console.log(10 !== 2);

const y = 5 > 10;
console.log(y);

const z = 100 === 100;
console.log(z);

const lastname = "shabani";
const k = 200;

//! if condition
if (k === 200) {
  console.log("hoooraay!");
}

if (k === 200) console.log("hoooraay!");

//! always true
if (true) {
  console.log("eyval");
}
if (true) console.log("eyval");

//! always false
if (false) {
  console.log("eyval2");
}
if (false) console.log("eyval2");

if (lastname === "mohammadi") {
  console.log("authentication success");
} else if (lastname === "shabani") {
  console.log("middle");
} else {
  console.log("authentication failed");
}

//! example 2
// let age = prompt("سن خود را وارد نمایید");
// if (age > 12) {
//   console.log("logged in! 😁");
// } else {
//   console.log("access denied 😟");
// }

//? switch
const daynumber = 8;
switch (daynumber) {
  case 0:
    console.log("شنبه");
    break;
  case 1:
    console.log("یکشنبه");
    break;
  case 2:
    console.log("دوشنبه");
    break;
  case 3:
    console.log("سه‌شنبه");
    break;
  case 4:
    console.log("چهارشنبه");
    break;
  case 5:
    console.log("پنجشنبه");
    break;
  case 6:
    console.log("جمعه");
    break;
  default:
    console.log("this is from default...");
}

if (daynumber === 0) {
  console.log("شنبه");
} else if (daynumber === 1) {
  console.log("یکشنبه");
}

//? for
let j = 1;
for (j; j <= 100; j++) {
  if (j === 10) continue;
  console.log(j);
}

//? while
let s = 200;
while (s <= 300) {
  s++;
  if (s === 220) break;
  console.log(s);
}

//? do-while
let h = 400;
do {
  console.log(h);
  h++;
} while (h <= 500);

//? Truthy & Falsy values in js
//? 5 Falsy values👇
if (false) console.log("alireza");
if (0) console.log("alireza");
if (undefined) console.log("alireza");
if (NaN) console.log("alireza");
if ("") console.log("alireza");

//? Truthy values👇 (everything else)
if ("alireza") {
  console.log("hello alireza");
}
if (200) {
  console.log("hello 200");
}
if (-1) {
  console.log("hello -1");
}
