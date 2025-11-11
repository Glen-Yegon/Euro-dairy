

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

function showSlide(idx) {
  const slides = document.querySelectorAll('.testimonial-card');
  const slider = document.querySelector('.testimonial-slider');

  if (idx >= slides.length) idx = 0;
  if (idx < 0) idx = slides.length - 1;
  index = idx;

  const slide = slides[index];
  const slideOffset = slide.offsetLeft;
  const slideWidth = slide.offsetWidth;
  const sliderWidth = slider.clientWidth;

  // Scroll so the card is centered
  const scrollPos = slideOffset - (sliderWidth / 2) + (slideWidth / 2);
  slider.scrollTo({
    left: scrollPos,
    behavior: 'smooth'
  });
}


// Next & Previous
nextBtn.addEventListener('click', () => {
  index++;
  showSlide(index);
});

prevBtn.addEventListener('click', () => {
  index--;
  showSlide(index);
});

// Auto Slide every 8 seconds
setInterval(() => {
  index++;
  showSlide(index);
}, 8000);
