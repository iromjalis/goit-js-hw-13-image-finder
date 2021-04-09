const apiKey = '21072245-3acfda09a1d5bc65070e6b336';

export default {
  searchQuery: '',
  page: 1,
  onNotice(){
    notice({
      title: `Loading... Please wait`,
      delay: 500,
      })
  },
  onError(){
    error({
      title: `Something went wront. Please try again`,
      delay: 250,
      })
      loadMoreBtn.disable();

      return
  },
  fetchArticles() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${apiKey}`;
    ;

    return fetch(url)
      .then(res => res.json())
      .then(({hits}) => {
        this.incrementPage();
  if(hits.length === 0){
    onError()
    return
  }
        return hits;
      });
  },
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};