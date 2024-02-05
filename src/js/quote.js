import axios from 'axios';

async function fetchQuote() {

    const currentDate = new Date();
    const currentUTC = new Date().toUTCString();
    const midnightUTC = new Date(0, 0, 0, 0);

    const lastTimeRequest = localStorage.getItem('lastQuoteRequest');

    if (!lastTimeRequest || currentUTC < midnightUTC) {

    } else {
        try {
            const response = await fetch('https://energyflow.b.goit.study/api/quote');
    
            if (!response.ok) {
                throw new Error('Failed to fetch quote');
              }
    
              const quoteData = await response.json();
              console.log(quoteData);
            //   return quoteData;
    
        } catch (error) {
            console.log('Error');
          }
    }

    
    
}

const quoteЕextEl = document.getElementById('.quote__text');
const quoteAuthorEl = document.getElementById('.quote__text--author');

quoteЕextEl.textContent = data.quoteTextEl;
quoteAuthorEl.textContent = data.quoteAuthorEl;

// lets call our function - fetchPosts()
fetchQuote()