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

// Mouseenter function
function enterAnimation(link, e, index) {
	link.tl.tweenFromTo(0, 'midway');
}

// Mouseleave function
function leaveAnimation(link, e) {
	link.tl.play();
}

// Animations variables
let workLinkUnderlineAnimEnter;
let workLinkUnderlineAnimLeave;

// Get all links
let workLinks = document.querySelectorAll('.link-underline');

workLinks.forEach((link, index, value) => {
	let underline = link.querySelector('.underline');
	link.tl = gsap.timeline({ paused: true });

	link.tl.fromTo(
		underline,
		{
			width: '0%',
			left: '0%',
		},
		{
			width: '100%',
			duration: 0.5,
		}
	);

	link.tl.add('midway');

	link.tl.fromTo(
		underline,
		{
			width: '100%',
			left: '0%',
		},
		{
			width: '0%',
			left: '100%',
			duration: 0.5,
			immediateRender: false,
		}
	);

	// Mouseenter
	link.addEventListener('mouseenter', (e) => {
		enterAnimation(link, e, index);
	});

	// Mouseleave
	link.addEventListener('mouseleave', (e) => {
		leaveAnimation(link, e);
	});
});

var width = window.innerWidth > 0 ? window.innerWidth : document.documentElement.clientWidth;
if (width > 600) {
	// logo
	TweenMax.staggerFrom(
		'.logo span',
		1.5,
		{
			delay: 1,
			opacity: 0,
			x: '20',
			ease: Expo.easeInOut,
		},
		0.08
	);

	// overlay
	TweenMax.to(
		'.first',
		1.5,
		{
			delay: 0.5,
			top: '-100%',
			ease: Expo.easeInOut,
		},
		0.08
	);

	TweenMax.to(
		'.second',
		1.5,
		{
			delay: 0.7,
			top: '-100%',
			ease: Expo.easeInOut,
		},
		0.08
	);

	TweenMax.to(
		'.third',
		1.5,
		{
			delay: 0.9,
			top: '-100%',
			ease: Expo.easeInOut,
		},
		0.08
	);

	// nav
	TweenMax.staggerFrom(
		'.nav-menu ul li a',
		1.5,
		{
			delay: 1.2,
			opacity: 0,
			x: '20',
			ease: Expo.easeInOut,
		},
		0.08
	);

	// contact
	TweenMax.staggerFrom(
		'.btn-contact div a',
		1.5,
		{
			delay: 1.6,
			opacity: 0,
			x: '20',
			ease: Expo.easeInOut,
		},
		0.08
	);

	// text animation
	TweenMax.from('.title-top  h1 .hidetext', 1.5, {
		delay: 0.7,
		y: '100%',
		ease: Expo.easeInOut,
	});

	TweenMax.from('.title-top  h2 .hidetext', 1.5, {
		delay: 0.9,
		y: '100%',
		ease: Expo.easeInOut,
	});

	TweenMax.from('.title-top  h3 .hidetext', 1.5, {
		delay: 1.1,
		y: '100%',
		ease: Expo.easeInOut,
	});

	TweenMax.from('.content-top  p', 1.5, {
		delay: 1.3,
		opacity: 0,
		x: '10000',
		ease: Expo.easeInOut,
	});

	// banner
	TweenMax.from('.right-top .img-top img', 1.5, {
		delay: 1.5,
		opacity: 0,
		x: '300',
		ease: Expo.easeInOut,
	});

	// load content

	// about-page

	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: '.about-page',
			start: 'top bottom',
		},
	});

	tl.from('.top-about', { y: 300, opacity: 0, duration: 1.5 });
	tl.from('.bottom-about .img-left', {
		x: -400,
		opacity: 0,
		duration: 1.5,
	});
	tl.from(
		'.bottom-about .img-right img',
		{
			x: 400,
			opacity: 0,
			duration: 1,
		},
		'-=1'
	);
	tl.from('.bottom-about .img-right .content-right', {
		y: 300,
		opacity: 0,
		duration: 1.5,
	});

	// project-page

	let tlp = gsap.timeline({
		scrollTrigger: {
			trigger: '.project-page',
			start: 'top bottom',
		},
	});

	tlp.from('.project-page .container', { y: 300, opacity: 0, duration: 1 }), '-=1';
	tlp.from('.slides-container', { opacity: 0, duration: 1 });

	// design-page

	let tld = gsap.timeline({
		scrollTrigger: {
			trigger: '.designer-page',
			start: 'top bottom',
		},
	});

	tld.from('.left-design .title-design p', { y: 300, opacity: 0, duration: 1.5 });
	tld.from('.left-design .content-design .text1', { y: 200, opacity: 0, duration: 1 }, '-=.5');
	tld.from('.left-design .content-design .text2', { y: 200, opacity: 0, duration: 1 }, '-=.5');
	tld.from('.banner-design img', { x: 400, opacity: 0, duration: 1 }, '-=.5');
	tld.from('.btn-design a', { opacity: 0, duration: 1 }, '-=.5');

	// article-page

	let tla = gsap.timeline({
		scrollTrigger: {
			trigger: '.articles-page',
			start: 'top bottom',
		},
	});

	tla.from('.top-art .title-art p', { y: 300, opacity: 0, duration: 1 });
	tla.from('.btn-art a', { opacity: 0, duration: 1 }, '-=.5');

	tla.from('.bottom-art .img-left-art img', { x: -400, opacity: 0, duration: 1 });
	tla.from('.bottom-art .img-right-art img', { x: 400, opacity: 0, duration: 1 }, '-=1');
	tla.from('.left-art p', { x: -300, opacity: 0, duration: 1 });
	tla.from('.right-art p', { x: -300, opacity: 0, duration: 1 }, '-=1');
	tla.from('.group-btn-art a', { opacity: 0, duration: 1 });
	tla.from('.group-btn-art span', { x: 300, opacity: 0, duration: 1 }, '-=1');

	// footer

	let tlf = gsap.timeline({
		scrollTrigger: {
			trigger: 'footer',
			start: 'top bottom',
		},
	});

	tlf.from('.btn-go-top a', { opacity: 0, duration: 1.5 });
	tlf.from('.contact-us', { x: -400, opacity: 0, duration: 1.5 }, '-=.5');
	tlf.from('.img-ft', { x: 400, opacity: 0, duration: 1.5 }, '-=1');
	tlf.from('.policy-ft', { opacity: 0, duration: 1.5 });
}
