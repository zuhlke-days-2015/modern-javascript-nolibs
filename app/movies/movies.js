import MovieTile from '../movie-tile/movie-tile.js';
import MovieApi from '../core/movie-api';

class MoviesView extends HTMLElement {
    createdCallback() {
        MovieApi.searchByDuration(3600).then(result => this.render(result));
    }

    render(data) {
        this.innerHTML = `

       <div class="container">
            <ul class="movies">
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
            rating="${movie.imdbVotes}">
          </li>
        `;
    }
}

document.registerElement('movies-view', {
    prototype: MoviesView.prototype
});