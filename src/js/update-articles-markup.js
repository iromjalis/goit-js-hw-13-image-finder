import articlesTpl from '../template/templateArticles.hbs';
import refs from './refs';

function updateArticlesMarkup(articles) {
  const markup = articlesTpl(articles);
  refs.articlesContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateArticlesMarkup;