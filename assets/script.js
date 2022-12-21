const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const elt1 = document.querySelector('.arrow_right');
console.log(elt1);

let i = 0

var image = document.querySelector('#banner img');


elt1.addEventListener('click', function (e) {
	e.preventDefault()

	var image = document.querySelector('#banner img');

	var dot = document.querySelector('.dot_selected');
	var nextdot = dot.nextElementSibling;
	var dots = document.querySelector('.dots');
	var texte = document.querySelector('#banner p');


	if (i < slides.length-1) {
		i += 1;
		image.setAttribute('src', "./assets/images/slideshow/" + slides[i].image);
		nextdot.classList.toggle('dot_selected');
		dot.classList.toggle('dot_selected');
		texte.innerHTML = slides[i].tagLine;

	} else {
		i = 0;
		image.setAttribute('src', "./assets/images/slideshow/" + slides[i].image);
		dots.firstElementChild.classList.toggle('dot_selected');
		dot.classList.toggle('dot_selected');
		texte.innerHTML = slides[i].tagLine;


	}
	console.log(i);
	console.log('elt1 clicked');
});


const elt2 = document.querySelector('.arrow_left');
console.log(elt2);

elt2.addEventListener('click', function (e) {
	e.preventDefault()

	var image = document.querySelector('#banner img');

	var dot2 = document.querySelector('.dot_selected');
	var previousdot = dot2.previousElementSibling;
	var dots = document.querySelector('.dots');
	var texte = document.querySelector('#banner p');


	if (i > 0) {
		i -= 1;
		image.setAttribute('src', "./assets/images/slideshow/" + slides[i].image);
		previousdot.classList.toggle('dot_selected');
		dot2.classList.toggle('dot_selected');
		texte.innerHTML = slides[i].tagLine;

	} else {
		i = slides.length-1;
		image.setAttribute('src', "./assets/images/slideshow/" + slides[i].image);
		dots.lastElementChild.classList.toggle('dot_selected');
		dot2.classList.toggle('dot_selected');
		texte.innerHTML = slides[i].tagLine;


	}
	
	console.log('elt2 clicked');

});




