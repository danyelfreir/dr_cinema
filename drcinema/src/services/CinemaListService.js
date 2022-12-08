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
      a: 'aa',
      á: 'ab',
      b: 'ac',
      d: 'ad',
      ð: 'ae',
      e: 'af',
      é: 'ag',
      f: 'ah',
      g: 'ai',
      h: 'aj',
      i: 'ak',
      í: 'al',
      j: 'am',
      k: 'an',
      l: 'ao',
      m: 'ap',
      n: 'aq',
      o: 'ar',
      ó: 'as',
      p: 'at',
      r: 'au',
      s: 'av',
      t: 'ax',
      u: 'ay',
      ú: 'az',
      v: 'ba',
      x: 'bb',
      y: 'bc',
      z: 'bd',
      ý: 'be',
      þ: 'bf',
      æ: 'bg',
      ö: 'bh',
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

      if (
        aName.split(' ').length > 1 &&
        bName.split(' ').length > 1 &&
        aName[0] === bName[0]
      ) {
        return this.twoNounsHelperSort(aName, bName);
      } else {
        return this.singleNounHelperSort(aName, bName);
      }
    });
    return sorted;
  };

  singleNounHelperSort = (aName, bName) => {
    const aFirstLetter = this.is_ascii[aName[0]];
    const aSecondLetter = this.is_ascii[aName[1]];
    const bFirstLetter = this.is_ascii[bName[0]];
    const bSecondLetter = this.is_ascii[bName[1]];

    if (aFirstLetter + aSecondLetter < bFirstLetter + bSecondLetter) {
      return -1;
    }
    if (aFirstLetter + aSecondLetter > bFirstLetter + bSecondLetter) {
      return 1;
    }
    return 0;
  };

  twoNounsHelperSort = (aName, bName) => {
    // sort sub name alphabetically
    if (
      this.is_ascii[aName.split(' ')[1][0]] <
      this.is_ascii[bName.split(' ')[1][0]]
    ) {
      return -1;
    }
    if (
      this.is_ascii[aName.split(' ')[1][0]] >
      this.is_ascii[bName.split(' ')[1][0]]
    ) {
      return 1;
    } else {
      return 0;
    }
  };
}
