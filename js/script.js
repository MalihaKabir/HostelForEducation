// DRY and Update:
// let scrollClass = document.querySelector('.scroll');
// console.log(scrollClass.getBoundingClientRect());

// To take more control on time during scrolling for big projects:
let numberOfScrollAppear = 1;

const isVisible = (element) => {
	let elementBox = element.getBoundingClientRect().top;
	let distanceFromTop = window.innerHeight;

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

	console.log(numberOfScrollAppear);
	numberOfScrollAppear++;
};

const throttle = (fn, wait) => {
	let time = Date.now();
	return () => {
		if (time + wait - Date.now() < 0) {
			fn();
			time = Date.now();
		}
	};
};

document.addEventListener('scroll', throttle(scrollAppearFunc, 500));
