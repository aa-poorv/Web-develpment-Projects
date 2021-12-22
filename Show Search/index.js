const showSearch = document.querySelector("#searchForm");
let images = document.querySelector("#images");

showSearch.addEventListener("submit", async function(e) {
  e.preventDefault();
  images.remove();
  images = document.createElement('div');
  document.body.append(images);
  const formElement = showSearch.elements.showName.value;
  const config = { params: { q: formElement} }
  const res = await axios.get("https://api.tvmaze.com/search/shows", config);
  tvSearch(res.data);
  showSearch.elements.showName.value = '';
});

const tvSearch = (shows) => {
  for(let s of shows) {
    const img = document.createElement('img');
    if(s.show.image){
    img.src = s.show.image.medium;
   }
    images.append(img);
  }
}
