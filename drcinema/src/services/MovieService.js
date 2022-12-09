import { token } from '../security/index';

export default class MovieService {
  constructor() {
    this.URL = 'https://api.kvikmyndir.is/';
    this.headers = {
      'Content-Type': 'application/json',
      'x-access-token': token,
    };
  }

  async getMovies() {
    const response = await fetch(`${this.URL}movies/`, {
      headers: this.headers,
    });
    let movies = await response.json();
    if (!movies) {
      return {
        movies: [],
        error: 'An error occurred while parsing data. Please try again later',
      };
    }
    if (response.status !== 200) {
      return {
        movies: [],
        error: movies.message,
      };
    }
    this._fixGenres(movies);
    return {
      movies,
      error: null,
    };
  }

  async getImages(imdbId) {
    const response = await fetch(`${this.URL}images?imdbid=${imdbId}`, {
      headers: this.headers,
    });
    const data = await response.json();
    if (data.error) return [];
    if (data.Message) return [];
    const backdrops = data[0].results;
    return backdrops;
  }

  async getGenres() {
    const response = await fetch(`${this.URL}genres`, {
      headers: this.headers,
    });
    const genres = await response.json();
    if (genres.error) return [];
    if (genres.Message) return [];
    return genres;
  }

  async _fixGenres(movies) {
    const allGenres = await this.getGenres();
    movies.forEach((movie) => {
      let newMovieGenres = [];
      if (typeof movie.genres[0] === 'number') {
        const movieGenreIds = movie.genres;
        movieGenreIds.forEach((movieGenre) => {
          const genreName = allGenres.filter(
            (genre) => genre.ID === movieGenre
          );
          newMovieGenres = newMovieGenres.concat(genreName);
        });
        movie.genres = newMovieGenres;
      }
    });
  }
}
