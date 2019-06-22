/* Scroll for vision */
const scrollAppearVision = () => {
	let scroll = document.querySelector('.scroll');
	let scrollPosition = scroll.getBoundingClientRect().top;
	let screenPosition = window.innerHeight;

	if (scrollPosition < screenPosition) {
		scroll.classList.add('scrollAppear');
	}
};
window.addEventListener('scroll', scrollAppearVision);

/* Scroll for service */
const scrollAppearFunc1 = () => {
	let scroll = document.querySelector('.scroll1');
	let scrollPosition = scroll.getBoundingClientRect().top;
	let screenPosition = window.innerHeight / 2;

	if (scrollPosition < screenPosition) {
		scroll.classList.add('scrollAppear1');
	}
};
window.addEventListener('scroll', scrollAppearFunc1);

/* Scroll for requirements */
const scrollAppearFunc2 = () => {
	let scroll = document.querySelector('.scroll2');
	let scrollPosition = scroll.getBoundingClientRect().top;
	let screenPosition = window.innerHeight / 2;

	if (scrollPosition < screenPosition) {
		scroll.classList.add('scrollAppear2');
	}
};
window.addEventListener('scroll', scrollAppearFunc2);
