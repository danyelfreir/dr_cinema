import token from '../security/index';

class MovieService {
  constructor() {
    this.URL = 'https://api.kvikmyndir.is/';
    this.headers = {
      'Content-Type': 'application/json',
      'x-access-token': token.token,
    };
  }

  getImages(imdbId) {
    fetch(`${this.URL}images?imdbid=${imdbId}`, { headers })
      .then((response) =>
        response
          .json()
          .then((data) => {
            const backdrops = data[0].results;
            return backdrops;
          })
          .catch((err) => console.log(err))
      )
      .catch((err) => console.log(err));
  }
}
