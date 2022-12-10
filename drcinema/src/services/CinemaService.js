import { token } from '../security';

export default class CinemaService {
  constructor() {
    this.URL = 'https://api.kvikmyndir.is/theaters/';
    this.headers = {
      'Content-Type': 'application/json',
      'x-access-token': token,
    };
  }

  async getCinemas() {
    const response = await fetch(`${this.URL}`, {
      headers: this.headers,
    });
    const cinemas = await response.json();
    if (cinemas.error) {
      return {
        cinemas: [],
        error: cinemas.message,
      };
    }
    if (!cinemas) {
      return {
        cinemas: [],
        error: 'An error occurred while parsing data. Please try again later',
      };
    }
    if (response.status !== 200) {
      return {
        cinemas: [],
        error: cinemas.message,
      };
    }
    return {
      cinemas,
      error: null,
    };
  }
}
