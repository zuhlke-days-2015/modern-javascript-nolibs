import MoviesView from './movies/movies';
import SearchView from './search/search';


class AppRoot extends HTMLElement {
    createdCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#/search">
                    <img alt="Brand" src="https://rawgit.com/zuhlke-days-2015/modern-javascript-styles/master/dist/img/Popcorn.svg" width="90px" />
                </a>
            </div>
        </div>
      </nav>
      <div class="jumbotron">
          <div class="container">
              <h2>Find a movie for your journey!</h2>
              <p>It's easy, just enter your location and destination and we'll find you a movie that will save you from boredom.</p>
          </div>
      </div>
      <search-view></search-view>
    `;
    }
}

export default document.registerElement('app-root', {
    prototype: AppRoot.prototype
});