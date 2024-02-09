import axios from 'axios';
import { loadFromLS, saveToLS } from './localStorage.js';

const refs = {
  quoteText: document.querySelector('.js__quote-text'),
  quoteAuthor: document.querySelector('.js__quote-author'),
};

const BASE_URL = 'https://energyflow.b.goit.study/api/quote';

const keyStorage = 'currentQuote';

let storageQuote = null;



async function getQuote() {
  const today = new Date();
  const currentDay = today.getDate();

  const storageDate = loadFromLS(keyStorage); 


  if ((storageDate && currentDay !== storageDate.currentDay) || storageDate === null) {
    await setFetchQuote(currentDay);
    addDataQuoteInHTML()
    console.log('A new day has been come.');
  } else {
    addDataQuoteInHTML()
    console.log('It is the same day, yet.');
  }
}

getQuote();

async function setFetchQuote(currentDay) {
  const { data } = await axios.get(BASE_URL);

  const quoteData = {
    currentDay,
    data,
  };

  saveToLS(keyStorage, quoteData);
}

function addDataQuoteInHTML() {
    storageQuote = loadFromLS(keyStorage);
    refs.quoteText.textContent = storageQuote.data.quote;
    refs.quoteAuthor.textContent = storageQuote.data.author;
}
