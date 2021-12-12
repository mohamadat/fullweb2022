console.log("Hi Javascript from extern");
//console.log("Hi Javascript from extern");
/* console.log("Hi Javascript from extern");
console.log("Hi Javascript from extern"); */

var name = 'Atwa-ICT';
console.log("name");
console.log(name);

let firstName = "Atwa";
let lastName = "ict";

console.log(firstName + "-" + lastName);

// let
// let = 6;
// اسماء المتغيرات
// لا يمكن استخدام كلمات محجوزة
//لا يمكن البدء برقم 
// لايمكن استخدام -
// case sensitve

let x = "small letter";
let X =
    "capitaletter";

let y = 5,
    z = 6,
    g = 7;

y = 55;

const h = 99;
// h = 100; error

// data types:
let title = "Atwa-ICT"; //string
let age = 30; //number
let isValid = true; //boolean
let j; //undefined
let color = null; //null

let type = typeof(age);
console.log("type is:" + type);


// string methods

let length = title.length;
let part = title.slice(0, 4);
let part2 = title.slice(5);
let part3 = title.slice(-3);
let sm = title.toLowerCase();
let cl = title.toUpperCase();

let full = title.replace("ICT", "Tech");

let text1 = "hi";
let text2 = "there!";
// let text3 = text1 + " " + text2;
let text3 = text1.concat(" ", text2, "????");

let email = "   me@gmail.com    ";
email = email.trim();

let letter = title.charAt(1);
let char = title[0];

let str = "hi ,students this is web development";
let arr = str.split(" ");

// string template
let mytxt = `welcome to the new ${firstName}-${lastName} `;

//numbers methods
let cc = 5;
// cc = cc + 5; 
cc *= 5;
cc /= 5;
cc += 5;

let t = 9.654
    // t = t.toFixed(0);
t = t.toFixed(2);

let n = "10";
n = Number(n);
n += 5;

let b = false;
b = Number(b);

let k = "77";
k = parseInt(k);


// array
let color1 = "yellow";
let color2 = "red";
let color3 = "black";

// array method
let colors = ["yellow", "red", "black", 4, true, 4, 4, 6, 4];
let yello = colors[0];
let nm = colors.length;
let last = colors[colors.length - 1];

// to search a value index in an array
let ll = colors.lastIndexOf(4);
// change array to string
let strarr = colors.toString();
let arrstr = colors.join(" * ");
// to delete last index
colors.pop();

// to delete first index
colors.shift();

delete colors[0];

// to add new items
// colors[7] = "pink";
colors.push("green");