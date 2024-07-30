document.addEventListener('DOMContentLoaded', () => {
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  
  smoothScrollLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          document.getElementById(targetId).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // For demonstration, we'll log the form values to the console
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Show a thank you message
  alert('Thank you for your message. We will get back to you shortly.');

  // Reset the form
  this.reset();
});
