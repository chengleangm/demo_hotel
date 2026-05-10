const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('active'));
});

const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('active');
  });
}, { threshold: 0.15 });
reveals.forEach(el => revealObserver.observe(el));

const filterButtons = document.querySelectorAll('.filter-btn');
const roomCards = document.querySelectorAll('.room-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;
    roomCards.forEach(card => {
      const category = card.dataset.category;
      card.style.display = filter === 'all' || category.includes(filter) ? 'block' : 'none';
    });
  });
});

document.querySelectorAll('.select-room').forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById('roomType').value = button.dataset.room;
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
  });
});

const galleryImages = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeLightbox = document.getElementById('closeLightbox');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('active');
  });
});

closeLightbox.addEventListener('click', () => lightbox.classList.remove('active'));
lightbox.addEventListener('click', event => {
  if (event.target === lightbox) lightbox.classList.remove('active');
});

const reviews = [
  { text: '“Beautiful rooms, peaceful location, and very friendly staff. Perfect for a weekend stay.”', name: 'Sokha Dara' },
  { text: '“The design feels premium and the booking process is very easy. I would stay again.”', name: 'Lina Chen' },
  { text: '“Clean, modern and comfortable. The pool and breakfast were excellent.”', name: 'James Martin' }
];
let reviewIndex = 0;
const reviewText = document.getElementById('reviewText');
const reviewName = document.getElementById('reviewName');

function showReview(index) {
  reviewText.textContent = reviews[index].text;
  reviewName.textContent = reviews[index].name;
}

document.getElementById('prevReview').addEventListener('click', () => {
  reviewIndex = (reviewIndex - 1 + reviews.length) % reviews.length;
  showReview(reviewIndex);
});

document.getElementById('nextReview').addEventListener('click', () => {
  reviewIndex = (reviewIndex + 1) % reviews.length;
  showReview(reviewIndex);
});

setInterval(() => {
  reviewIndex = (reviewIndex + 1) % reviews.length;
  showReview(reviewIndex);
}, 5000);

document.querySelectorAll('.faq-item button').forEach(button => {
  button.addEventListener('click', () => {
    button.parentElement.classList.toggle('active');
  });
});

const bookingForm = document.getElementById('bookingForm');
const formMessage = document.getElementById('formMessage');

bookingForm.addEventListener('submit', event => {
  event.preventDefault();

  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;
  const name = document.getElementById('guestName').value.trim();

  if (!checkin || !checkout || !name) {
    formMessage.textContent = 'Please complete all required fields.';
    return;
  }

  if (new Date(checkout) <= new Date(checkin)) {
    formMessage.textContent = 'Check-out date must be after check-in date.';
    return;
  }

  formMessage.textContent = `Thank you, ${name}. Your booking request is ready to send.`;
  bookingForm.reset();
});
