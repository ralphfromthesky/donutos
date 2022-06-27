// this one for header sticky

const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

//this one for hamburger menu click

let hamburger = document.getElementById("hamburger");
let nav = document.getElementById("nav");

hamburger.addEventListener('click', ()=> {
    nav.classList.toggle('show');
    console.log('buttion clicked');
});



// this one is for scoll dash in effect
const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('header, .mainFoot',{delay:350, origin:'left'})
sr.reveal('.nav.show',{delay:350, origin:'right'})

sr.reveal('.text, .mainProduct, .mainService, .service',{delay:200, origin:'bottom'})
