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
      <li is="movie-tile"
        imdb-url="${movie.imdbUrl}"
        image-url="${movie.omdbImgUrl}"
        title="${movie.title}"
        runtime="${movie.runtimeOriginal}"
        rating="${movie.imdbUrl}"
        imdb-url="${movie.imdbVotes}">
      </li>
    `;
  }
}

export default document.registerElement('movies-view', {
  prototype: MoviesView.prototype
});