/* index.js
  - Crossfade hero background images (uses a single .hero-layer element for performance)
  - Fades slide content in/out
  - Progress lines animate per slide (4s)
  - Click a progress slot to jump to slide
  - Pause on hover, keyboard nav, accessible toggles
*/

const IMAGE_PATHS = [
  'images/anita-jankovic-c7PT4PZMcNA-unsplash.jpg',
  'images/jakob-cotton-K1hwkV5GPl0-unsplash.jpg',
  'images/leon-ephraim-AxoNnnH1Y98-unsplash.jpg'
];

const SLIDE_DURATION = 4000;
let current = 0;
let timer = null;
const slides = Array.from(document.querySelectorAll('.slide'));
const progressSlots = Array.from(document.querySelectorAll('.progress-slot'));
const heroLayer = document.getElementById('heroLayer');

// pre-load images for crisp transitions
function preloadImages(paths){
  paths.forEach(p => { const i=new Image(); i.src = p; });
}
preloadImages(IMAGE_PATHS);

// set initial hero-layer background
function setHeroImage(index, immediate = false){
  if(!heroLayer) return;
  heroLayer.style.transition = immediate ? 'none' : 'opacity 900ms cubic-bezier(.22,.9,.35,1)';
  heroLayer.style.opacity = 0;
  // small timeout to allow opacity transition
  setTimeout(()=> {
    heroLayer.style.backgroundImage = `url("${IMAGE_PATHS[index]}")`;
    heroLayer.style.opacity = 1;
  }, 60);
}

// update slide content visibility
function setActiveSlide(index){
  index = (index + slides.length) % slides.length;
  slides.forEach((s, i) => {
    const isActive = i === index;
    s.classList.toggle('active', isActive);
    s.setAttribute('aria-hidden', String(!isActive));
  });
  // update hero image
  setHeroImage(index);
  // update progress slot active class & restart animation
  progressSlots.forEach((slot, i) => {
    slot.classList.toggle('active', i === index);
    // remove inline animation by reflow
    if(i === index){
      slot.querySelector('::after');
      // reset by forcing reflow on the element and toggling class
      slot.style.setProperty('--restart', Date.now());
    }
  });
  current = index;
}

// start autoplay
function startAuto(){
  stopAuto();
  // ensure the correct progress animation is active on start
  progressSlots.forEach((s, i) => s.classList.toggle('active', i === current));
  timer = setInterval(()=> {
    const next = (current + 1) % slides.length;
    setActiveSlide(next);
  }, SLIDE_DURATION);
}

// stop autoplay
function stopAuto(){
  if(timer){ clearInterval(timer); timer = null; }
}

// click handlers for progress slots
progressSlots.forEach(slot => {
  slot.addEventListener('click', (e) => {
    const idx = Number(slot.dataset.index);
    stopAuto();
    setActiveSlide(idx);
    startAuto();
  });
});



// keyboard navigation
document.addEventListener('keydown', (e) => {
  if(e.key === 'ArrowRight'){ stopAuto(); setActiveSlide(current+1); startAuto(); }
  if(e.key === 'ArrowLeft'){ stopAuto(); setActiveSlide(current-1); startAuto(); }
  if(e.key === 'Escape'){
    // close search if open
    const searchOverlay = document.getElementById('searchOverlay');
    if(searchOverlay && searchOverlay.classList.contains('active')){
      document.getElementById('closeSearch').click();
    }
  }
});

// mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if(navToggle && navLinks){
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// search overlay
const searchBtn = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const closeSearch = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');
if(searchBtn && searchOverlay && closeSearch){
  searchBtn.addEventListener('click', ()=> {
    searchOverlay.classList.add('active');
    searchOverlay.setAttribute('aria-hidden','false');
    stopAuto();
    setTimeout(()=> searchInput && searchInput.focus(), 150);
  });
  closeSearch.addEventListener('click', ()=> {
    searchOverlay.classList.remove('active');
    searchOverlay.setAttribute('aria-hidden','true');
    startAuto();
  });
}

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

// Respect reduced motion preference
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if(reduceMotion && reduceMotion.matches){
  // minimal motion: show first image statically
  heroLayer.style.transition = 'none';
  setHeroImage(0, true);
  setActiveSlide(0);
} else {
  // init
  setHeroImage(0, true);
  setActiveSlide(0);
  // small delay then start auto to allow first image to render
  setTimeout(()=> startAuto(), 600);
}

const aboutSection = document.querySelector('.about-parallax');
window.addEventListener('scroll', () => {
  const rect = aboutSection.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.8) {
    aboutSection.classList.add('is-visible');
  }
});

