import newsService from './js/news-service';
import updateArticlesMarkup from './js/update-articles-markup';
import LoadMoreBtn from './js/components/load-more-button';
import refs from './js/refs';
import './styles.css';

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
  });
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}

// import './styles.css';
// import template from './template/templateArticles.hbs'
// // fetch('http://jsonplaceholder.typicode.com/todos', options)
// // fetch('http://jsonplaceholder.typicode.com/photos', options)
// // fetch('http://hn.algolia.com/api/v1/search?query=html&tags=story', options)

// const refs = {
//   articleContainer : document.querySelector('.js-articles'),
//   searchForm: document.querySelector('.js-search-form'),
//   inputForm: document.querySelector('.form-control'),
//   btn: document.querySelector('.button-more')
// }
// refs.btn.style.display = 'none';

// let searchQuery = '';
// let page = 1;

// const onInputChange = e => {
//   e.preventDefault()
//   let searchQuery = '';

//   searchQuery = e.currentTarget.elements[0].value;
//   console.log(searchQuery);
// }
// //&      === submit ===
// refs.searchForm.addEventListener('submit', e => {
//   e.preventDefault()
  
//   refs.articleContainer.innerHTML = ''

//   page=1;
//   const searchQuery = refs.inputForm.value;
//   console.log(searchQuery);
//   fetchArticles(searchQuery)
//   .then(articles=>{
//     updateArticlesMarkup(articles);
//     page +=1;

//   })
//   .catch(console.log('Error'))
// }
// )

// refs.btn.addEventListener('click', ()=>{
//   page +=1;

//   fetchArticles(searchQuery,page);
//   // .then(updateArticlesMarkup())
//   // .catch(error=> console.log('Error'))
// })

// //&    === fetch ===
// function fetchArticles (searchQuery, page){
//   const API = '83b8de66f4e44356b629957251220cf4';
//   const PAGE_SIZE = 3;
//   const URL = `https://newsapi.org/v2/everything?q=bitcoin&q=${searchQuery}&apiKey=${API}&pageSize=${PAGE_SIZE}&page=${page}`;

//   const options = {
//     method: 'GET',
//     header: {
//       Accept : 'application/json',
//       'X-Api-Key': API
//     }
//   }
  
// return fetch(URL, options)
// .then(response=> response.json())
// .then(({articles}) => {

//   updateArticlesMarkup(articles),
//   window.scrollTo({
//     top:684,
//     behavior: 'smooth',
//   })

// })
// .catch(error=>console.log(error))




// }
// // &    === markup ===
// function updateArticlesMarkup(articles){
//   const markup = template(articles)

//   refs.articleContainer.insertAdjacentHTML('beforeend', markup)

//   refs.btn.style.display = 'block';
// }