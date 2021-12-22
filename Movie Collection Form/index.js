
const movieForm = document.querySelector("#movieForm");
movieForm.addEventListener('submit',function(event){
  event.preventDefault();
  let moviename = movieForm.elements.moviename;
  let releaseyear = movieForm.elements.releaseyear;
  let IMDBrating = movieForm.elements.IMDBrating;
  movieAdd(moviename.value, releaseyear.value, IMDBrating.value);
  moviename.value = '';
  releaseyear.value = '';
  IMDBrating.value = '';
});

function movieAdd(moviename, releaseyear, IMDBrating){
  let newMovie = document.createElement('li');
  const btag = document.createElement('b');
  const brtag1 = document.createElement('br');
  const brtag2 = document.createElement('br');
  btag.append(moviename);
  btag.append(brtag2);
  newMovie.append(btag);
  newMovie.append(releaseyear);
  newMovie.append(brtag1);
  newMovie.append(IMDBrating);
  let movies = document.querySelector("#movies");
  movies.append(newMovie);
}

let movies = document.querySelector("#movies");
movies.addEventListener('click',function(event){
  console.log(event.target);
  event.target.remove();
});
