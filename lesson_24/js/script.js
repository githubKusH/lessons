"use strict"

// Задача №1
const items = document.querySelectorAll('.items');

items.forEach(item => {
	item.addEventListener('click', function () {
		this.classList.toggle('active');
	});
});

// Задача №2
window.addEventListener('load', bodyLoaded);
function bodyLoaded(e) {
	document.body.classList.add('loaded')
}

// Задача №3
const header = document.querySelector('header')
const footer = document.querySelector('footer')

header.addEventListener('mouseover', () => {
	footer.style.backgroundColor = 'red'
})

header.addEventListener('mouseleave', () => {
	footer.style.backgroundColor = ''
})

// Задача №4
const options = {
	root: null,
	rootMargin: "0px 0px 0px 0px",
	threshold: 0.7,
}

let callback = (entries, observer) => {
	entries.forEach((entry) => {
		const targetElement = entry.target;
		const itemElement = document.querySelector('.item')
		if (entry.isIntersecting) {
			targetElement.classList.add("animate");
			console.log("елемент видно");
			if (itemElement) {
				const time = parseFloat(itemElement.dataset.time) || 1000
				const value = parseInt(itemElement.dataset.value) || 0
				let i = 0
				let timer = setInterval(() => {
					console.log(i)
					i >= value ? clearInterval(timer) : i += 1
					itemElement.innerHTML = i
				}, time)
				observer.unobserve(itemElement)
			}
		} else {
			targetElement.classList.remove("animate");
			console.log("елемент не видно");
		}
	})
}

let observer = new IntersectionObserver(callback, options);

let someElements = document.querySelectorAll("[class*='--anim']");
someElements.forEach(someElement => {
	observer.observe(someElement);
})

