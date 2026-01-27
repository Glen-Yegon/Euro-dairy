// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("siteHeader");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

document.addEventListener("DOMContentLoaded", () => {
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
});
