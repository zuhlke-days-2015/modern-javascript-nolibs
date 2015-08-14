import App from './app';
import router from './router/router';
import SearchView from './search/search';
import MoviesView from './movies/movies';

router.config([
  { route: "search",  component: SearchView },
  { route: "movies",  component: MoviesView }
]);

router.navigate("search");