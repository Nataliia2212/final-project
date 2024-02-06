import axios from 'axios';
import {loadFromLS, saveToLS} from './localStorage.js';

const refs = {
    quoteText: document.querySelector('.js__quote-text'),
    quoteAuthor: document.querySelector('.js__quote-author')
}

const BASE_URL = 'https://energyflow.b.goit.study/api/quote';

async function getQuote() {
    const {data} = await axios.get(BASE_URL);

    console.log(data);

    refs.quoteText.textContent = data.quote;
    refs.quoteAuthor.textContent = data.author;

}

getQuote()