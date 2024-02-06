import axios from 'axios';

const form = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email');

function submitForm(event) {
  event.preventDefault();

  emailInput.setAttribute('pattern', '^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$');

  const email = emailInput.value;

  const data = {
    email
  };

  axios.post('https://energyflow.b.goit.study/api/subscription', data)
    .then(response => {
      console.log(response.data);
      alert('You have successfully subscribed to our newsletter!');
    })
    .catch(error => {
      console.error('Error sending the order:', error);
      alert('An error occurred. Please try again.');
    });
}

form.addEventListener('submit', submitForm);