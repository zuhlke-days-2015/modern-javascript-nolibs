
class MoviesView extends HTMLElement {
    createdCallback() {
        var dummydata = {
            movies: [
                {
                    imdbID: "tt4733046",
                    imdbUrl: "http://www.imdb.com/title/tt4733046",
                    imdbVotes: "10.0",
                    omdbImgUrl: "http://img.omdbapi.com/?i=tt4733046",
                    runtimeOriginal: "124 min",
                    title: "The Weight of Chains 2"
                },
                {
                    imdbID: "tt4008866",
                    imdbUrl: "http://www.imdb.com/title/tt4008866",
                    imdbVotes: "6.7",
                    omdbImgUrl: "http://img.omdbapi.com/?i=tt4008866",
                    runtimeOriginal: "137 min",
                    title: "Bibi & Tina: Voll verhext!"
                }
            ]
        };


        this.render(dummydata);
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





class MovieTile extends HTMLLIElement {

    createdCallback() {
        this.classList.add("movie__item");
        this.render(this.attributes);
    }


    render(attrs) {
        this.innerHTML = `
           <figure class="movie__item__inner">
                <div class="movie__item__inner__img">
                    <a href="">
                        <img src="${attrs['image-url'].value}" alt="" onerror="this.src='http://placehold.it/343x200'" />
                    </a>
                </div>
                <figcaption>
                    <h3><a href="${attrs['imdb-url'].value}">${attrs['title'].value}</a></h3>
                    <p>Runtime ${attrs['runtime'].value}<br />IMDB Votes ${attrs['rating'].value}</p>
                </figcaption>
            </figure>
        `;
    }
}

document.registerElement('movie-tile', {
    prototype: MovieTile.prototype,
    extends: 'li'
});