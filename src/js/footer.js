import axios from 'axios';

function submitForm() {
  const email = document.getElementById('email').value;

  const data = {
    email: email
  };

  axios.post('https://energyflow.b.goit.study/api/subscription', data)
    .then(response => {
      console.log(response.data);
      alert('Замовлення успішно відправлено!');
    })
    .catch(error => {
      console.error('Помилка відправлення замовлення:', error);
      alert('Сталася помилка. Будь ласка, спробуйте ще раз.');
    });
}

const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', submitForm);