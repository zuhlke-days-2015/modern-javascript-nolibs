import MovieTile from '../movie-tile/movie-tile.js';
import MovieApi from '../core/movie-api';

class MoviesView extends HTMLElement {
    createdCallback() {
        let duration = location.hash.split('=').pop();

        MovieApi.searchByDuration(duration).then(result => this.render(result));
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

export default document.registerElement('movies-view', {
    prototype: MoviesView.prototype
});