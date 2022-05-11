
function navToggle(){
	let div = document.querySelector('#link-con');
	let menu = document.querySelector('#nav-btn');
	let line = document.querySelectorAll('[data-menu-line]');

	div.classList.toggle('nav-width');
	menu.classList.toggle('nav-btn-left-toggle');
	line[0].classList.toggle('zero-opacity');
	line[1].classList.toggle('left-line-rotate');
	line[2].classList.toggle('right-line-rotate');
}