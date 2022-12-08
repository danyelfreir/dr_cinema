export default class CinemaListService {
  constructor(cinemaList) {
    this.cinemaList = cinemaList;
    this.is_ascii = {
      A: 'AA',
      Á: 'AB',
      B: 'AC',
      D: 'AD',
      Ð: 'AE',
      E: 'AF',
      É: 'AG',
      F: 'AH',
      G: 'AI',
      H: 'AJ',
      I: 'AK',
      Í: 'AL',
      J: 'AM',
      K: 'AN',
      L: 'AO',
      M: 'AP',
      N: 'AQ',
      O: 'AR',
      Ó: 'AS',
      P: 'AT',
      R: 'AU',
      S: 'AV',
      T: 'AX',
      U: 'AY',
      Ú: 'AZ',
      V: 'BA',
      X: 'BB',
      Y: 'BC',
      Ý: 'BD',
      Z: 'BE',
      Þ: 'BF',
      Æ: 'BG',
      Ö: 'BH',
    };
  }

  get sortedCinemas() {
    return this.sortCinemas();
  }

  sortCinemas = () => {
    // Sorts the cinema list alphabetically by name
    const sorted = this.cinemaList.sort((a, b) => {
      const aName = a.name;
      const bName = b.name;
      const aNameFirstLetter = aName[0];
      const aNameSecondLetter = aName[1];
      const bNameFirstLetter = bName[0];
      const bNameSecondLetter = bName[1];
      const aNameFirstLetterAscii = this.is_ascii[aNameFirstLetter];
      const bNameFirstLetterAscii = this.is_ascii[bNameFirstLetter];
      if (
        // If both names have more than one word
        a.name.split(' ').length > 1 &&
        b.name.split(' ').length > 1 &&
        aNameFirstLetter === bNameFirstLetter
      ) {
        if (
          this.is_ascii[a.name.split(' ')[1][0]] <
          this.is_ascii[b.name.split(' ')[1][0]]
        ) {
          return -1;
        }
        if (
          this.is_ascii[a.name.split(' ')[1][0]] >
          this.is_ascii[b.name.split(' ')[1][0]]
        ) {
          return 1;
        } else {
          return 0;
        }
      }
      if (
        // If both names have only one word
        aNameFirstLetterAscii + aNameSecondLetter <
        bNameFirstLetterAscii + bNameSecondLetter
      ) {
        return -1;
      }
      if (aNameFirstLetterAscii > bNameFirstLetterAscii) {
        return 1;
      }
      return 0;
    });
    return sorted;
  };
}
