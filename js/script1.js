// let scrollClass = document.querySelector('.scroll');
// console.log(scrollClass.getBoundingClientRect());

// DRY:
const isVisible = (element) => {
	let elementBox = element.getBoundingClientRect().top;
	let distanceFromTop = window.innerHeight / 1.2;

	if (elementBox < distanceFromTop) {
		return true;
	} else {
		return false;
	}
};

const scrollAppearFunc = (element) => {
	let sectionList = document.querySelectorAll('.scroll');
	sectionList.forEach((section) => {
		if (isVisible(section)) {
			section.classList.add('scrollAppear');
		}
	});
};
document.addEventListener('scroll', scrollAppearFunc);

// Before DRY:
/* Scroll for vision */
// const scrollAppearVision = () => {
// 	let scroll = document.querySelector('.scroll');
// 	let scrollPosition = scroll.getBoundingClientRect().top;
// 	let screenPosition = window.innerHeight / 1.3;

// 	if (scrollPosition < screenPosition) {
// 		scroll.classList.add('scrollAppear');
// 	}
// };
// window.addEventListener('scroll', scrollAppearVision);

// /* Scroll for service */
// const scrollAppearFunc1 = () => {
// 	let scroll = document.querySelector('.scroll1');
// 	let scrollPosition = scroll.getBoundingClientRect().top;
// 	let screenPosition = window.innerHeight / 1.3;

// 	if (scrollPosition < screenPosition) {
// 		scroll.classList.add('scrollAppear1');
// 	}
// };
// window.addEventListener('scroll', scrollAppearFunc1);

// /* Scroll for requirements */
// const scrollAppearFunc2 = () => {
// 	let scroll = document.querySelector('.scroll2');
// 	let scrollPosition = scroll.getBoundingClientRect().top;
// 	let screenPosition = window.innerHeight / 1.3;

// 	if (scrollPosition < screenPosition) {
// 		scroll.classList.add('scrollAppear2');
// 	}
// };
// window.addEventListener('scroll', scrollAppearFunc2);
