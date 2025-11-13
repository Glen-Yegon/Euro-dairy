

// nav style change on scroll (makes nav light on scroll)
const siteHeader = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if(window.scrollY > window.innerHeight * 0.12){
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

const menuToggle = document.getElementById("menuToggle");
const slideMenu = document.getElementById("slideMenu");
const overlayBg = document.getElementById("overlayBg");
const btnClose = document.getElementById("btnClose");

// Open menu
menuToggle.addEventListener("click", () => {
  slideMenu.classList.add("active");
  overlayBg.classList.add("active");
  menuToggle.classList.add("active");
});

// Close menu
btnClose.addEventListener("click", () => {
  slideMenu.classList.remove("active");
  overlayBg.classList.remove("active");
  menuToggle.classList.remove("active");
});

// Close by clicking overlay
overlayBg.addEventListener("click", () => {
  slideMenu.classList.remove("active");
  overlayBg.classList.remove("active");
  menuToggle.classList.remove("active");
});

const slider = document.querySelector('.testimonial-slider');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;
const slides = document.querySelectorAll('.testimonial-card');

function showSlide(idx) {
  if (idx >= slides.length) idx = 0;
  if (idx < 0) idx = slides.length - 1;
  index = idx;

  const slideWidth = slides[0].offsetWidth;
  slider.scrollTo({
    left: slideWidth * index,
    behavior: 'smooth'
  });
}

// Next & Previous
nextBtn.addEventListener('click', () => {
  showSlide(index + 1);
});

prevBtn.addEventListener('click', () => {
  showSlide(index - 1);
});

// Auto Slide every 8 seconds
setInterval(() => {
  showSlide(index + 1);
}, 8000);
