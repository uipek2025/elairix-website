// Basic interactivity for elAIrix website

// Toggle the mobile navigation menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  // Smoothly close the menu when a navigation link is clicked on mobile
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
      }
    });
  });

  // Contact form submission (placeholder)
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simple alert to indicate form submission; real implementation would handle sending data
    alert('Thank you for contacting elAIrix! We will get back to you shortly.');
    form.reset();
  });
});