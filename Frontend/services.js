// mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if(navToggle && navLinks){
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}


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
