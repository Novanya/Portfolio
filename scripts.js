// Add smooth scroll for Learn More button
document.getElementById('learn-more-btn').addEventListener('click', function() {
  window.scrollTo({
    top: document.getElementById('about-me').offsetTop,
    behavior: 'smooth'
  });
});

