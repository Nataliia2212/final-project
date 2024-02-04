import axios from 'axios';

function submitForm() {
  const email = document.getElementById('email').value;

  const data = {
    email: email
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

const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', submitForm);