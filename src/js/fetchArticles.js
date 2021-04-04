    const API = '83b8de66f4e44356b629957251220cf4';
    const URL = 'https://newsapi.org/v2/everything?q=${inputValue}';
    
    const options = {
      method: 'GET',
      header: {
        Accept : 'application/json',
        'X-Api-Key': API
      }
    }
function fetchArticles(searchQuery){
    
return fetch(`${URL}&apiKey=${API}`, options)
  .then(response=> response.json())
  .then(data=> data.articles)
  .catch(error=>console.log(error))
  }
  
  export default fetchArticles