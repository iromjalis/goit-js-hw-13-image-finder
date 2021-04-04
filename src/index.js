import './styles.css';
import './js/template.js';
import './template/template.hbs';

const refs = {
    input: document.querySelector('.js-input'),
    countriesList: document.querySelector('.js-countries-list'),
  }

  const fetchCountries = (searchQuery) => {
    const MAIL_URL = 'https://restcountries.eu/rest/v2/name/'
    let url = `${MAIL_URL}${searchQuery}`
     return fetch(url).then(res => res.json()).catch(err => console.log(err))
  }
  
  const render = {
    countriesList(data) {
      const markup = countriesListHbs(data)
      refs.countriesList.innerHTML = ''
      refs.countriesList.insertAdjacentHTML('beforeend', markup)
    },
    country(data) {
      const markup = countryInfoHbs(...data)
      refs.countriesList.innerHTML = ''
      refs.countriesList.insertAdjacentHTML('beforeend', markup)
    
    }
  }

  const info = {
    showResult(data) {
      const countriesCount = data.length;
      
      if (countriesCount > 10) {
        const message = "Too many matches found"
        const type = 'info'
        showNotification(message, type)
      } else if ((countriesCount >= 2)&&(countriesCount <= 10)){
        render.countriesList(data)
      } else if (countriesCount === 1) {
        render.country(data)
      } else {
        const message = "Matches not found"
        const type = 'error'
        showNotification(message, type) 
      }
      },
      showNotification(message, type) {
      const myNotification = alert({
        type: `${type}`,
        text: `${message}`,
        mode: 'light',
        delay: 2000,
        sticker: false,
        maxTextHeight: null,
        addClass: 'notification',
      });
    
      myNotification.on('click', () => {
        myNotification.close();
      });
    }
    
    }
    