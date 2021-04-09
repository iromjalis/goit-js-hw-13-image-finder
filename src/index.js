import newsService from './js/news-service';
import updateArticlesMarkup from './js/update-articles-markup';
import loadMoreBtn from './js/components/load-more-button';
import refs from './js/refs.js';
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

const loadMoreBtn = new loadMoreBtn({
  selector: 'button[data-action="load-more"]',
  hidden: true,
});
  loadMoreBtn.disable();

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
if(!newsService.query ){
      onError()
      return
    }
  newsService.fetchArticles().then(articles => {
    
    if(newsService.query){
      onNotice() 
      updateArticlesMarkup(articles);
      loadMoreBtn.show();
      loadMoreBtn.enable();
    }
  });
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}

function onNotice(){
  notice({
    title: `Loading... Please wait`,
    delay: 500,
    })
}
function onError(){
  error({
    title: `Something went wront. Please try again`,
    delay: 250,
    })
}

const onOpenModalClick = e => {
  e.preventDefault();

  if (e.target.localName === 'img') {
    refs.modalImgRef.src = e.target.dataset.source;
    refs.modalImgRef.alt = e.target.alt;
    refs.modalImgRef.dataset.index = e.target.dataset.index;

    refs.modalRef.classList.add('is-open');
  }
};
const onKeyboardClick = e => {
  if (e.key === 'Escape') {
    refs.modalRef.classList.remove('is-open');
  }
};

const onCloseModalClick = e => {
  if (e.target.localName !== 'img') {
    refs.modalRef.classList.remove('is-open');

    refs.modalImgRef.src = '';
    refs.modalImgRef.alt = '';
  }
};

refs.galleryListRef.addEventListener('click', onOpenModalClick);
window.addEventListener('keyup', onKeyboardClick);
window.addEventListener('click', onCloseModalClick);

