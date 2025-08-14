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

  // Remove the placeholder contact form handler. The updated form posts
  // directly to FormSubmit and does not require interception in JavaScript.
});