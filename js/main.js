window.onscroll = function () {
	console.log(window.pageYOffset);
	var home = document.getElementById('home-nav');
	var project = document.getElementById('project-nav');
	var designer = document.getElementById('designer-nav');
	var articles = document.getElementById('articles-nav');

	if (window.pageYOffset < 2450) {
		home.classList.add('active-nav');
		project.classList.remove('active-nav');
	} else if (window.pageYOffset > 2450 && window.pageYOffset < 3330) {
		project.classList.add('active-nav');
		home.classList.remove('active-nav');
		designer.classList.remove('active-nav');
	} else if (window.pageYOffset > 3330 && window.pageYOffset < 4192) {
		project.classList.remove('active-nav');
		designer.classList.add('active-nav');
		articles.classList.remove('active-nav');
	} else if (window.pageYOffset > 4192 && window.pageYOffset < 5400) {
		designer.classList.remove('active-nav');
		articles.classList.add('active-nav');
	} else {
		articles.classList.remove('active-nav');
	}
};
let slideIndex = 1;
showSlides(slideIndex);

// function plusSlides(n) {
// 	showSlides((slideIndex += n));
// }

function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName('my-slides');
	let dots = document.getElementsByClassName('dot');
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '');
	}
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += ' active';
}
var btn = $('#to-top');

btn.on('click', function (e) {
	e.preventDefault();
	$('html, body').animate({ scrollTop: 0 }, '300');
});
$(document).ready(function () {
	$('.item-dark').click(function () {
		$('.item-dark').removeClass('active-nav');
		$(this).addClass('active-nav');
	});
});
jQuery(document).ready(function ($) {
	var alterClass = function () {
		var ww = document.body.clientWidth;
		if (ww < 768) {
			$('#add-class').addClass('top-small-res');
		}
	};
	$(window).resize(function () {
		alterClass();
	});
	//Fire it when the page first loads:
	alterClass();
});
