/* global fetch */
const APIKEY = localStorage.getItem('apikey'); // works on my machine ;-)
const BASEURL = "https://zuhlke-days-2015-movie-api.azurewebsites.net/discover/movie?";

export default class MovieApi {
    static searchByDuration(duration) {
        let fromDuration = parseInt(duration, 10) * 0.8;
        let params = `runtimeFrom=${fromDuration}&runtimeTo=${duration}&apikey=${APIKEY}`;

        return fetch(BASEURL + params)
          .then(result => result.json())
          .then(data => {
            data.movies = data.movies
              .sort(sortByIMDBRating)
              .slice(0, 9)
              .map(addApiKey);
              
            return data;
          });
        
        function sortByIMDBRating(movieA, movieB) {
          let ratingA = parseFloat(movieA.imdbVotes);
          let ratingB = parseFloat(movieB.imdbVotes);
          
          if (ratingA === ratingB) {
            return 0;
          }
          
          return ratingA < ratingB ? 1 : -1;
        }
          
        function addApiKey(movie){
          movie.omdbImgUrl = `${movie.omdbImgUrl}&apikey=${APIKEY}`;
          return movie;
        }
    }
}