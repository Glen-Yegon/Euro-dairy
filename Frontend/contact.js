// Simple form submit animation (will integrate email backend later)
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // You can integrate email sending API here
  alert("Thank you for your message! We will get back to you soon.");

  contactForm.reset();
});

const faqCards = document.querySelectorAll(".faq-card");

faqCards.forEach(card => {
  const question = card.querySelector(".faq-question");
  question.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});

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
