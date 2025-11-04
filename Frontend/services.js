// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// HAMBURGER MENU TOGGLE
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
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
