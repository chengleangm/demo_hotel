const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}

const revealItems = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < window.innerHeight - 80) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thank you! Your booking request has been sent.");
    bookingForm.reset();
  });
}
