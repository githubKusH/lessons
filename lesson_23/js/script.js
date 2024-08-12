"use strict"


//отримання ширини вікна браузера (в'юпорт)
/*
const windowWidth = window.innerWidth;
console.log(windowWidth);
*/

//отримання висоти вікна браузера (в'юпорт)
/*
const windowHeight = window.innerHeight;
console.log(windowHeight);

if (windowWidth >= 768) {
	//якісь дії
}
	*/

//BOM
//Navigator

//Дані про браузер
/*
console.log(navigator.userAgent)
*/

//який в нас браузер
/*
if (navigator.userAgent.includes("Chrome")) {
	console.log('Браузер Хром');
} else if (navigator.userAgent.includes("Firefox")) {
	console.log('Браузер Firefox');
}
	*/

//Інформація про систему
/*
console.log(navigator.userAgentData);
console.log(navigator.userAgentData.mobile);
console.log(navigator.userAgentData.platform);
*/

//location
//Адресний рядок браузера
/*
console.log(location)
console.log(location.href)
*/
/*
const cleanHash = location.hash.replace("#", "")
console.log(cleanHash);

if (cleanHash === "popup") {
console.log("Додався")
}
*/

//Перенаправлення користувача
// location.href += 'index.html';

// Alert
// alert('Повідомлення')

//Confirm
/*
const confirmAnswer = confirm("Запитання");
console.log(confirmAnswer)

if (confirmAnswer === true) {
	console.log(`Дія так`)
} else {
console.log (`Дія ні`)
}
*/

//Prompt

// let promptAnswer = prompt(`Запитання`);
// console.log(promptAnswer)

// Document Object Model (DOM)
// Об'єктна модель документу

// Навігація по документу
// До тегу html

/*
const htmlElement = document.documentElement
console.log(htmlElement)
*/

// До тегу head
/*
const headElement = document.head
console.log(headElement);
*/

// До тегу body
/*
const bodyElement = document.body
console.log(headElement);
*/

// Перший та останній дочірній елемент
/*
const bodyElement = document.body
const firstChild = bodyElement.firstElementChild
const lastChild = bodyElement.lastElementChild

console.log(firstChild)
console.log(lastChild)
*/

// Усі дочірні елементи (Колекція)
// const bodyElement = document.body
// Колекція дочірніх елементів
// const childNodes = bodyElement.children

// console.log(childNodes);
/*
for (let index = 0; index <childNodes.length; index++) {
	console.log(childNodes[index])
}
*/

// For ... of метод перебору для колекцій
/*
for (let childNode of childNodes) {
	console.log(childNode)
}
 */

// Навігація до батьківських
// та сусідніх елементів
/*
const bodyElement = document.body
const previousSibling = bodyElement.previousElementSibling
const nextSibling = Element.nextElementSibling
console.log(previousSibling)
console.log(nextSibling)
 */

// Частіше використовується
// Пошук та отримання довільного елементу

// Отримання одного першого знайденого об'єкту
/*
const liElement = document.querySelector("li")
console.log(liElement)

if (liElement) {

}
*/
// Отримання списку (статична колекція)
/*
const liElement = document.querySelectorAll ("li")
console.log(liElement)

if (liElement.length) {
	liElement.forEach((item, index) => {
		console.log(item);
	});
}
	*/
/*
const liElement = document.querySelectorAll(".list__item")
console.log(liElement);

if (liElement.length) {
	liElement.forEach((item, index) => {
		console.log(item);
	});
}
	*/
// Отримання батьківського об'єкту
/*
const listElement = document.querySelector(`.list`)
const parentElement = listElement.parentElement
console.log(parentElement)
*/

// Closest
//перевірка наявності батьківського об'єкту
/*
const listItem = document.querySelector(`.list__item`)
const parentElement = listItem.closest(`.page`)
console.log(parentElement)
*/
/*
const page = document.querySelector(`.page`)

let template = `<div class="blok">`
if (page) {
	template += `<span>Сторінка існує!</span>`
}
template += `</div>`

console.log(template)

// page.insertAdjacentHTML ("beforeend", template)
// page.insertAdjacentHTML ("beforebegin", template)
// page.insertAdjacentHTML ("afterbegin", template)
// page.insertAdjacentHTML ("afterend", template)


*/


//Перенесення елементу
/*
const list = document.querySelector(`.list`)
const header = document.querySelector(`.header`)

header.insertAdjacentElement("beforeend", list)
*/

//Клонування елементу

// const page = document.querySelector(`.page`)

// // const clonePage = page.cloneNode(true)
// // const clonePage = page.cloneNode()

// console.log(clonePage)

//Перезапис класу
/*
const list = document.querySelector(`.list`)
list.className = `some-class`
*/
/*
const list = document.querySelector(`.list`)


// list.classList.add(`red`)
// list.classList.remove(`list__item`)
// list.classList.toggle(`red`)
list.classList.contains(`list`)
 
if (list.classList.contains(`list`)) {
	console.log('Клас є')
} else {
	console.log('Класу немає')
}

*/

//Управління стилями
//style
/*
const list = document.querySelector(`.list`)

list.style.background = `red`
list.style.fontSize = `38px`
*/

//Отримання стилю(його значення)
/*
const list = document.querySelector(`.list`)
const listStyle = getComputedStyle(list)
const listStyleFontSize = parseFloat(listStyle.fontSize)

console.log(listStyleFontSize)
*/

//DATA атрибути
/*
const list = document.querySelector(`.list`)
// const speed = parseFloat(list.dataset.speed)
const speed = (list.dataset.speed)

console.log(speed)
*/


//Корисні властивості
// const list = document.querySelector(`.list`)

// console.log(list.tagName)

//Атрибут hidden
// list.hidden = true

// Розміри та координати

// Розмір з прокруткою
/*
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
console.log(windowWidth);
console.log(windowHeight);
*/

// Розмір без прокрутки
/*
const mainElement = document.body;
const windowClientWidth = mainElement.clientWidth;
const windowClientHeight = mainElement.clientHeight;

console.log(windowClientWidth);
// console.log(windowClientHeight);
*/
// Кількість прокручених пікселів
/*
const windowScrollTop = window.scrollY
const windowScrollLeft = window.scrollY
console.log(windowScrollTop);
console.log(windowScrollLeft);
*/

// window.scrollTo ({ options})

// Прокрутка на вказані координати

/*
window.scrollTo({
	top: 1000,
	left: 0,
	behavior:"smooth"
})
	*/

// Задача №1
const bodyElement = document.body
console.log(bodyElement);

//Задача №2
function createList(itemNumber = 5) {
	
	const listElement = document.createElement(`ul`);

	for (let i = 0; i < itemNumber; i++) {
		 const itemElement = document.createElement(`li`);
		 itemElement.textContent = `${i + 1}`;
		 listElement.appendChild(itemElement);
	}

	document.body.appendChild(listElement);
}
createList(8);

//Задача №3

document.body.classList.add(`loaded`);

if (document.body.classList.contains(`loaded`)) {
	document.body.style.color = `green`;
} else {
	console.log(`body немає такого класу`);

}
//Задача №4

const someObjects = document.querySelectorAll('.item');

if (someObjects.length) {
	someObjects.forEach((item, index) => {
		console.log(item);
		item.classList.add(`active`);
		item.textContent = `Елемент №${index + 1}`;
	});
}
else {
		console.log(`елементу не існує`)
}

//Задача №5

const button = document.querySelector(`.button`)
if (button) {
	console.log(`кнопка існує`)
	scrollToBlock(button);

function scrollToBlock(element) {
	const block = element.dataset.scroll;
	element.scrollIntoView({
		block: block,
		inline: `nearest`,
		behavior: `smooth`
	});
	}
}


//Задача №6
const link = document.querySelector(`.link`)
const color = +link.dataset.color
console.log(color);

if (color < 200) {
	link.style.color = `red`;
}