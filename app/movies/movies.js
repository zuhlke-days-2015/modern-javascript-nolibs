import MovieApi from '../core/movie-api';
import router from '../router/router';

class MoviesView extends HTMLElement {
  createdCallback() {
    let duration = location.hash.split('=').pop();
    
    if(duration) {
      MovieApi.searchByDuration(duration).then(data => {
        this.render(data);
      });
    } else {
      router.navigate("search");
    }
  }
  
  render(data) {
    this.innerHTML = `
      <div class="container">
        <ul class="movie">
            ${data.movies.map(this.renderMovie).join("")}
        </ul>
      </div>
    `;
  }
  
  renderMovie(movie) {
    return `
      <li class="movie__item">
        <figure class="movie__item__inner">
            <div class="movie__item__inner__img">
                <a href="${movie.imdbUrl}">
                    <img src="${movie.omdbImgUrl}" alt="" onerror="this.src='http://placehold.it/343x200'" />
                </a>
            </div>
            <figcaption>
                <h3><a href="${movie.imdbUrl}">${movie.title}</a></h3>
                <p>Runtime ${movie.runtimeOriginal}<br />IMDB Votes ${movie.imdbVotes}</p>
            </figcaption>
        </figure>
      </li>
    `;
  }
}

export default document.registerElement('movies-view', {
  prototype: MoviesView.prototype
});