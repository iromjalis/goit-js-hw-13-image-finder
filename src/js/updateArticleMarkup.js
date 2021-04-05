import template from '../template/template.hbs'

const refs = {
    articleContainer : document.querySelector('.js-articles'),
  }
  
function updateArticlesMarkup(articles){
    const markup = template(articles)
  
    refs.articleContainer.insertAdjacentHTML('beforeend', markup)
  
}
export default updateArticlesMarkup