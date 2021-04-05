import './styles.css';
import template from './template/templateArticles.hbs'
// import fetchArticles from './js/fetchArticles';
// import updateArticlesMarkup from './js/updateArticleMarkup';


// fetch('http://jsonplaceholder.typicode.com/todos', options)
// .then(response=> response.json())
// .then(data=> console.log(data))

// fetch('http://jsonplaceholder.typicode.com/photos', options)
// .then(response=> response.json())
// .then(data=> console.log(data))

// fetch('http://hn.algolia.com/api/v1/search?query=html&tags=story', options)
// .then(response=> response.json())
// .then(data=> console.log(data))
const refs = {
  articleContainer : document.querySelector('.js-articles'),
  searchForm: document.querySelector('.js-search-form')
}

const onInputChange = e=>{
  e.preventDefault()
  
  const inputValue = e.currentTarget.elements[0].value;
  console.log(inputValue);

}
refs.searchForm.addEventListener('submit', fetchArticles())

//&    === fetch ===
function fetchArticles (searchQuery){

  const API = '83b8de66f4e44356b629957251220cf4';
  const URL = 'https://newsapi.org/v2/everything?q=${inputValue}';
  
  const options = {
    method: 'GET',
    header: {
      Accept : 'application/json',
      'X-Api-Key': API
    }
  }
  
fetch(`${URL}&apiKey=${API}`, options)
.then(response=> response.json())
.then(({articles}) => {

  updateArticlesMarkup(articles)
})
.catch(error=>console.log(error))
}


// &    === markup ===
function updateArticlesMarkup(articles){
  const markup = template(articles)

  refs.articleContainer.insertAdjacentHTML('beforeend', markup)

}