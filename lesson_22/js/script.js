//Строгий режим
"use strict"
/* 
let result = 2 + 3 * 10 / 5;
console.log(typeof result);
console.log(result);
 */
/* 
let num = 5;
let result = 2 + 3 * 10 / ++num;
console.log(result);
 */
/* 
let result = 5 >= 6;
console.log(typeof result);
console.log(result);
 */
/* 
let result = 5 == "5";
console.log(typeof result);
console.log(result);
 */
/* 
let result = 5 != "5";
console.log(typeof result);
console.log(result);
 */
/* 
let result = 5 === "5";
console.log(typeof result);
console.log(result);
 */
/* 
let result = 5 !== "5";
console.log(typeof result);
console.log(result);
 */

/* 
let result = !0;
console.log(typeof result);
console.log(result);
 */
/* 
let result = 0 || "";
console.log(result);
console.log(Boolean(result));
 */
/* 
let result = 0 && "";
console.log(result);
console.log(Boolean (result));
 */
/* 
let varOne = 0
let varTwo = 30

if (varOne) {
	console.log ("Працює")
} else {
	console.log ("Не Працює")
}
console.log(varOne);
 */
/* 
let varOne = 10
let varTwo = 0

if (varOne > varTwo) {
	console.log(`${varOne} більше ніж ${varTwo}`);
} else if (varOne === varTwo) {
	console.log(`${varOne} рівне ${varTwo}`);
} else if (varOne < varTwo) {
	console.log(`${varOne} менше ніж ${varTwo}`);
} else {
	console.log('все пропало')
}

if (varOne === 10) {
	console.log(`varOne дорівнює 10`)
}
 */
/* 
let varOne = '1'
let varTwo = 3
let varThree = 3
let varFour = 4

if (varTwo === 2 || varOne > 3 && varThree < 4 || varFour > 6) {
	console.log(`умова True`)
}
console.log(`продовження коду...`)
 */
/* 
let someVar = 10 > 5 ? `10 більше 5` : "10 менше 5"
console.log(someVar);
 */
/* 
let someString = "Привіт! Як справи?"
console.log(someString.length)
for ( let i = 0; i < someString.length; ++i){
	console.log(someString[i])
};
*/
/* 
let someArray = [10, "Жека", true, "Привіт!"]
console.log(typeof someArray);
console.log(someArray);
console.log(someArray[3]);

console.log(Array.isArray(someArray));
*/
/* 
let someArray = [10, "Жека", true, "Привіт!"]

for (let i = 0; i < someArray.length; ++i) {
	console.log(someArray[i]);
}
	*/
	/*
let someArray = [10, "Жека", true, "Привіт!"]
	
someArray.forEach((item, index) => {
	console.log(index)
	console.log(item)
})
*/
/*
let userName = ["Вася", "Петро", "Ілдика"]
console.log(userName)
userName.push("Жека", "Анатолій")
console.log(userName)
*/
/*
let userName = ["Вася", "Петро", "Ілдика"]
console.log(userName.includes("Петро"))
*/
/*
let userName = ["Вася", "Петро", "Ілдика"] 
if (!userName.includes(10)) {
	userName.push(10)
}
console.log(userName)
*/
/*
let userName = ["Вася", "Петро", "Ілдика"]
!userName.includes(10) ? userName.push(10) : null
console.log(userName);

*/
/*
let userName = ["Вася", "Петро", "Ілдика"]
let userNameString = userName.join("!")
console.log(userNameString)
console.log( typeof userNameString)
*/
/*
const user = {
	age: 40,
	name: "Жека"
}
console.log(user)
console.log(user.age)
console.log(user.name)
*/
/*
showMassage()

function showMassage() {
	console.log(`Я текст!`)
}
showMassage()
*/
/*
function showMassage(someText = "Текст за замовчуванням") {
	console.log(someText);
}
showMassage()


showMassage("Привіт")
*/
/*
const numOne = 10
const numTwo = 20

function calcSum(a = 0, b = 0) {
	console.log(a + b)
}
calcSum()
calcSum(numOne, numTwo)
*/
/*
const numOne = 10
const numTwo = 20


function calcSum(a = 0, b = 0) {
	return a + b
}
function showMassage(someText = "Текст за замовчуванням") {
	console.log(someText);
}
calcSum(numOne, numTwo)
showMassage(calcSum(numOne, numTwo))
*/
/*
let someName = (text) => console.log(text)
*/
/*
const text = "Привіт! Світ Привіт! Світ"
let template = ``

function initText(text) {
	for (let i = 0; i < text.length; ++i) {
		const item = text[i]
		template +=
				`<span style="${item === ' ' ? `display:inline;` : ""}animation-delay: ${i * 0.1}s">${item}</span>`
	}
}
initText(text)

const page = document.querySelector(`.page`)
page.insertAdjacentHTML("beforeend", template)
*/

// let someVar = 0;
// ++someVar;

// if (someVar) {
// 	console.log(someVar);
// }




for (let i = 1; i <= 10; ++i) {
	console.log(`Пункт №${i}`);
 }
 
 if ( 2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	 console.log('000');
 }

let numOne = 0
let numTwo = 1

function calcDivision(a = 0, b = 1) {
	if (typeof a !== 'number' || typeof b !== 'number') {
		return 'Параметр має бути числовим';
	 } else if (calcDivision, b === 0) {
		return('На нуль ділення не можливе...');
	} else {
		let result = a / b;
		return `Результат ділення: ${result}`;
	}
		
	
}

function showMassage(calcDivision) {
	console.log(calcDivision);
}

calcDivision(numOne, numTwo)
showMassage(calcDivision(numOne, numTwo))

 numOne = 5
 numTwo = 1
 showMassage(calcDivision(numOne, numTwo))
 numOne = ''
 numTwo = 1
showMassage(calcDivision(numOne, numTwo))
 numOne = 7
 numTwo = 0
showMassage(calcDivision(numOne, numTwo))
 numOne = 3
 numTwo = 20
showMassage(calcDivision(numOne, numTwo))


let someArray = [10, "Жека", true, "Привіт!", 30]
someArray.forEach((item) => {
	if (item === 10)
		console.log(item)
	
})



