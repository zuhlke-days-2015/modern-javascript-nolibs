
class MovieTile extends HTMLElement {

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
    prototype: MovieTile.prototype
});