
const API_KEY="26874a559fcccef8d74f605156a6b3e9";

// https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1

const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRateMovies:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/movie?api_key=${API_KEY}&language=en-US&query=horror&page=1&include_adult=false`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default requests;