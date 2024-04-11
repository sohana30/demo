/**
 * @file
 * Main Site Scripts.
 */
document.addEventListener('DOMContentLoaded', () => {
  // Get references to HTML elements.
  const newsletterForm = document.getElementById('newsletter-subscribe-form');
  const newsletterFormThankYou = document.getElementById('newsletter-thank-you');
  const signUpAgainButton = document.getElementById('signup-again');

  // Function to show the "Thank You" section.
  const showThankYou = () => {
    newsletterForm.classList.add('hidden');
    newsletterFormThankYou.classList.remove('hidden');
    newsletterFormThankYou.classList.add('show');
    newsletterFormThankYou.setAttribute('aria-hidden', 'false');
  };
  
  // Event listener for form submission.
  newsletterForm.addEventListener('submit', (e) => {
    const emailInput = document.getElementById('email');
        if (validateEmail(emailInput.value)) {
          e.preventDefault();
          showThankYou();
        } else {
          alert('Invalid email address. Please enter a valid email.');
          e.preventDefault();
        }
      
    // Email input validation.
    function validateEmail(email) {
      const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return emailPattern.test(email);
    }
  });

  // Event listener for "Sign Up Again" button click.
  signUpAgainButton.addEventListener('click', () => {
    newsletterForm.classList.remove('hidden');
    newsletterFormThankYou.classList.remove('show');
    newsletterFormThankYou.classList.add('hidden');
    newsletterFormThankYou.setAttribute('aria-hidden', 'true');
  });
});
