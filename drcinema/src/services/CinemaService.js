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
    if (response.status !== 200) {
      return {
        cinemas: [],
        error: response.message,
      };
    }
    const cinemas = await response.json();
    if (!cinemas) {
      return {
        cinemas: [],
        error: 'An error occurred while parsing data. Please try again later',
      };
    }
    return {
      cinemas,
      error: null,
    };
  }
}
