var APIKEY = localStorage.getItem('apikey'); // works on my machine ;-)
var BASEURL = "https://zuhlke-days-2015-movie-api.azurewebsites.net/discover/movie?";

export default class MovieApi {
    static searchByDuration(duration) {
        var fromDuration = parseInt(duration, 10) * 0.8;
        var params = `runtimeFrom=${fromDuration}&runtimeTo=${duration}&apikey=${APIKEY}`;

        return fetch(BASEURL + params)
         .then(function(result) {
             return result.json();
         })
        .then(function(data) {
            data.movies = data.movies
                .slice(0, 9)
                .map(addApiKey);

            return data;
        });

        function addApiKey(movie){
            movie.omdbImgUrl = `${movie.omdbImgUrl}&apikey=${APIKEY}`;
            return movie;
        }
    }
}