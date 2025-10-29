// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("siteHeader");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// MOBILE NAV TOGGLE
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
