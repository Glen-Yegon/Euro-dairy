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
