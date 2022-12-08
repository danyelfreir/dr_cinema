import { token } from '../security';

export default class UpcomingService {
  constructor() {
    this.URL = 'https://api.kvikmyndir.is/upcoming/';
    this.headers = {
      'Content-Type': 'application/json',
      'x-access-token': token,
    };
  }

  async getUpcomingMovies() {
    const response = await fetch(`${this.URL}`, { headers: this.headers });
    if (response.status !== 200) {
      return {
        upcomingMovies: [],
        error: response.message,
      };
    }
    const upcomingMovies = await response.json();
    if (!upcomingMovies) {
      return {
        upcomingMovies: [],
        error: 'An error occurred while parsing data. Please try again later',
      };
    }
    return {
      upcomingMovies,
      error: null,
    };
  }
}
