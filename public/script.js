<<<<<<< HEAD
// Add interactivity or animations here
document.addEventListener('DOMContentLoaded', () => {
  console.log('Afton Robotics Lab website loaded successfully!');

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Simple fade-in effect on page load
  document.body.style.opacity = '0';
  window.addEventListener('load', () => {
    document.body.style.transition = 'opacity 1s';
    document.body.style.opacity = '1';
  });

  // Button hover sound effect (optional)
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
      const audio = new Audio('your-button-sound-url.mp3');
      audio.play();
    });
  });

  // Social media hover effect
  const socialLinks = document.querySelectorAll('.social-links img');
  socialLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.transform = 'scale(1.2)';
    });
    link.addEventListener('mouseleave', () => {
      link.style.transform = 'scale(1)';
    });
  });

  function openModal(imageSrc) {
    document.getElementById("image-modal").style.display = "flex";
    document.getElementById("full-image").src = "assets/" + imageSrc;
  }

  function closeModal() {
    document.getElementById("image-modal").style.display = "none";
  }
=======
// Add interactivity or animations here
document.addEventListener('DOMContentLoaded', () => {
  console.log('Afton Robotics Lab website loaded successfully!');

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Simple fade-in effect on page load
  document.body.style.opacity = '0';
  window.addEventListener('load', () => {
    document.body.style.transition = 'opacity 1s';
    document.body.style.opacity = '1';
  });

  // Button hover sound effect (optional)
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
      const audio = new Audio('your-button-sound-url.mp3');
      audio.play();
    });
  });

  // Social media hover effect
  const socialLinks = document.querySelectorAll('.social-links img');
  socialLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.transform = 'scale(1.2)';
    });
    link.addEventListener('mouseleave', () => {
      link.style.transform = 'scale(1)';
    });
  });
>>>>>>> 6528643453bec7c4c74de1c7b46e0ca911e03a12
});

