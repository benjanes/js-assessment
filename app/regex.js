exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /\d/g.test(str);
  },

  containsRepeatingLetter: function(str) {
    return /([a-zA-z])\1+/g.test(str);
  },

  endsWithVowel: function(str) {
    return /[aeiou]$/gi.test(str);
  },

  captureThreeNumbers: function(str) {
    const series = str.match(/\d{3}/g);
    if (series && series.length) return series[0];
    return false;
  },

  matchesPattern: function(str) {
    return /^\d{3}-\d{3}-\d{4}$/.test(str);
  },

  isUSD: function(str) {
    return /^\$\d{1,3}(?:,?\d{3})*(?:\.\d{2})?$/.test(str);
  }
};
