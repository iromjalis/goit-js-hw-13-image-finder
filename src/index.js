import newsService from './js/news-service';
import updateArticlesMarkup from './js/update-articles-markup';
import LoadMoreBtn from './js/components/load-more-button';
import refs from './js/refs';
import './styles.css';


import { alert, notice, info, success, error, defaults, defaultModules} from '@pnotify/core';
import "@pnotify/core/dist/PNotify.css" 
import "@pnotify/desktop/dist/PNotifyDesktop" ;
import '@pnotify/core/dist/BrightTheme.css';

import * as PNotifyFontAwesome5Fix from '@pnotify/font-awesome5-fix';
import * as PNotifyFontAwesome5 from '@pnotify/font-awesome5';
defaultModules.set(PNotifyFontAwesome5Fix, {});
defaultModules.set(PNotifyFontAwesome5, {});
defaults.width = '200px';

const loadMoreBtn = new LoadMoreBtn({
  selector: 'button[data-action="load-more"]',
  hidden: true,
});

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

function searchFormSubmitHandler(event) {
  event.preventDefault();

  const form = event.currentTarget;
  newsService.query = form.elements.query.value;

  clearArticlesContainer();
  newsService.resetPage();
  fetchArticles();
  form.reset();

}

function fetchArticles() {
  loadMoreBtn.disable();

  newsService.fetchArticles().then(articles => {
    updateArticlesMarkup(articles);
    loadMoreBtn.show();
    loadMoreBtn.enable();
    onNotice()
  });
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}

function onNotice(){
  notice({
    title: `Loading ${newsService.query}... Please wait`,
    delay: 500,
    })
}

//* модалочка
// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()