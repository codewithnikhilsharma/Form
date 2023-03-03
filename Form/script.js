const form = document.querySelector('#contact-form');
const successMessage = document.querySelector('#success-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.querySelector('#name').value;
  const address = form.querySelector('#address').value;
  const phone = form.querySelector('#phone').value;
  const email = form.querySelector('#email').value;
  const message = form.querySelector('#message').value;

  // Send the form data to the server using fetch or XMLHttpRequest
  // Replace the URL with your own endpoint
  fetch('https://example.com/submit-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, address, phone, email, message })
  })
    .then(response => {
      if (response.ok) {
        successMessage.textContent = 'Your message has been sent!';
        successMessage.style.display = 'block';
        form.reset();
      } else {
        successMessage.textContent = 'Oops! Something went wrong.';
        successMessage.style.display = 'block';
      }
    })
    .catch(error => {
      successMessage.textContent = 'Oops! Something went wrong.';
      successMessage.style.display = 'block';
      console.error(error);
    });
});
