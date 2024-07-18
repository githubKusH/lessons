//Строгий режим
"use strict"

/* 
let userAge = 39
console.log(userAge);
*/


// let userAge
// userAge = 39
// console.log(userAge)


/*
let userAge = 39
console.log(userAge)

userAge = 40
console.log(userAge)
*/

/*
let userAge = 39
let otherUserAge
console.log(otherUserAge)
otherUserAge = userAge
console.log(otherUserAge)
*/

/*
let userAge = 39
function someFunction() {
	let userAge = 15
	console.log(userAge)
}
someFunction()
console.log(userAge)
*/
/*
let userAge = 39
console.log(userAge)
function someFunction() {
	let userAge = 40
	console.log(userAge)
	if (userAge > 0) {
		let userAge = 15
		console.log(userAge)
	}
}
someFunction()
*/
/*
let user = `admin`
let userAge
if (user === `admin`) {
	userAge = 40
}

console.log(userAge)
*/
/*
const userAge = 39
console.log(userAge)
userAge
console.log(userAge)
*/

/*
let userAge
console.log(userAge)
console.log(typeof userAge)
*/
/*
let user = `admin`
let userAge 
if (user === `admin`) {
	userAge = 40
}
//....код
if (userAge === undefined) {
	console.log(`Error`)
} else {
	console.log(userAge)
}

*/
/*
let userAge = null
console.log(typeof userAge);
console.log(userAge);
*/
/*
let userAge = 39
console.log(userAge);
console.log(typeof userAge);
*/
/*
let number = 1 / 0
console.log(typeof number)
console.log(number)
*/
/*
let number = 10 / `Жека`
console.log(typeof number)
console.log(number)
*/
/*
let userAge = `39`
console.log(typeof userAge);
console.log(userAge);
*/
/*
let userAge = 39
let userName = `Жека`
let userInfo = `Ім'я: ${userName}, вік: ${userAge}`
console.log(userInfo);
*/
/*
let someVar = NaN;
console.log(someVar);
console.log(typeof someVar);
console.log(Boolean(someVar));
console.log(typeof Boolean(someVar));

if (someVar) {
	console.log(`Good`)
}
*/

/*
let someString = `Привіт! Як справи?`;
console.log(someString.length);
*/
	
/*
let someString = `Привіт! Як справи?`;
console.log(someString[2]);
*/
/*
let someString = `#Привіт! Як справи?`;
someString = someString.replace(`#`, ``);
console.log(someString);
*/
/*
let someNotRoundNum = 25.9;
console.log(Math.floor(someNotRoundNum));
*/

let userAge = 20
console.log(userAge)
userAge = `sss`
console.log(userAge)


let numOne = 20
let numTwo = `20`
let numSumm = numOne + numTwo;
console.log(numSumm)