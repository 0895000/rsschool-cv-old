document.querySelector('.burger').addEventListener('click', function (e) {
	e.preventDefault();
	
	if (this.classList.contains('active')){
		this.classList.remove('active');
		document.querySelector('#bmenu').classList.remove('nav-active');
	}
	else {
		this.classList.add('active');
		document.querySelector('#bmenu').classList.add('nav-active');
	}
})

const burger = document.querySelector('.burger');
const bmenu = document.querySelector('.bmenu');
const bmenuListLink = document.querySelectorAll('.bmenu__list-link');

bmenuListLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
	burger.classList.remove('active');
	bmenu.classList.remove('nav-active');
}


document.querySelector('.contact__title').addEventListener('click', function (e) {
	e.preventDefault();
	
		document.querySelector('.contact__list').classList.toggle('contact__list--active');

})

document.querySelector('.contacts__icon').addEventListener('click', function (e) {
	e.preventDefault();
	
		document.querySelector('.contact__list').classList.toggle('contact__list--active');

})

