// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Typing / shuffling text animation
const textElement = document.getElementById("animated-text");
const finalText = "We Milk Ideas Into Innovation 🐄";
let shuffledText = "";
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

function shuffleText() {
  let iteration = 0;
  const interval = setInterval(() => {
    shuffledText = finalText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return finalText[index];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");

    textElement.textContent = shuffledText;

    if (iteration >= finalText.length) {
      clearInterval(interval);
    }
    iteration += 1 / 2; // control speed
  }, 50);
}

window.addEventListener("load", shuffleText);



// Animate story blocks when they come into view
const storyBlocks = document.querySelectorAll('.story-block');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

storyBlocks.forEach(block => observer.observe(block));


const members = [
  {
    name: "David Collins",
    role: "Founder & Managing Director",
    bio: "With 20+ years in the dairy industry, David leads with a focus on sustainability and cutting-edge innovation.",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=1200&q=80"
  },
  {
    name: "Sarah Mitchell",
    role: "Technical Engineer",
    bio: "Sarah ensures every installation meets the highest standards of precision and reliability.",
    img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=1200&q=80"
  },
  {
    name: "James Carter",
    role: "Customer Relations",
    bio: "James connects farmers with the right technology and support to boost productivity and success.",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&q=80"
  }
];

const imgBig = document.getElementById("imgBig");
const imgSmall0 = document.getElementById("imgSmall0");
const imgSmall1 = document.getElementById("imgSmall1");
const nameEl = document.querySelector(".person-name");
const roleEl = document.querySelector(".person-role");
const bioEl = document.querySelector(".person-bio");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pauseBtn = document.getElementById("pauseBtn");

let index = 0;
let isPaused = false;
let interval = null;
const DELAY = 4000;

function fadeOut(element) {
  element.style.opacity = 0;
  element.style.transition = "opacity 0.8s ease";
}

function fadeIn(element) {
  element.style.opacity = 1;
  element.style.transition = "opacity 0.8s ease";
}

function render(i) {
  index = (i + members.length) % members.length;
  const main = members[index];
  const next1 = members[(index + 1) % members.length];
  const next2 = members[(index + 2) % members.length];

  // Fade out elements
  [imgBig, imgSmall0, imgSmall1, nameEl, roleEl, bioEl].forEach(el => fadeOut(el));

  setTimeout(() => {
    // Update content after fade out
    imgBig.innerHTML = `<img src="${main.img}" alt="${main.name}">`;
    imgSmall0.innerHTML = `<img src="${next1.img}" alt="${next1.name}">`;
    imgSmall1.innerHTML = `<img src="${next2.img}" alt="${next2.name}">`;

    nameEl.textContent = main.name;
    roleEl.textContent = main.role;
    bioEl.textContent = main.bio;

    // Fade in elements
    [imgBig, imgSmall0, imgSmall1, nameEl, roleEl, bioEl].forEach(el => fadeIn(el));
  }, 500);
}

function next() {
  render(index + 1);
}

function prev() {
  render(index - 1);
}

function startAuto() {
  stopAuto();
  interval = setInterval(() => next(), DELAY);
  isPaused = false;
  pauseBtn.textContent = "⏸";
}

function stopAuto() {
  clearInterval(interval);
  isPaused = true;
  pauseBtn.textContent = "▶";
}

// Button Events
pauseBtn.addEventListener("click", () => (isPaused ? startAuto() : stopAuto()));
nextBtn.addEventListener("click", () => {
  next();
  startAuto();
});
prevBtn.addEventListener("click", () => {
  prev();
  startAuto();
});

// Initialize
render(0);
startAuto();



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


