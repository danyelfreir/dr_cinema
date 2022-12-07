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
    if (response.status !== 200) {
      return {
        movies: [],
        error: response.message,
      };
    }
    const movies = await response.json();
    if (!movies) {
      return {
        movies: [],
        error: 'An error occurred while parsing data. Please try again later',
      };
    }
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
}
