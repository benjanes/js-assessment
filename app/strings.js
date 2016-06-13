exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    return str.split('').reduce((res, char) => {
      if (res[res.length - 1][0] === char) {
        if (res[res.length - 1].length < amount) res[res.length - 1] += char;
      } else {
        res.push(char);
      }
      return res;
    }, ['']).join('');
  },

  wordWrap: function(str, cols) {
    return str.split(' ').reduce((res, word) => {
      if (res.length) {
        if (res[res.length - 1].length + word.length + 1 > cols) {
          res.push(word);
        } else {
          res[res.length - 1] += ' ' + word;
        }
      } else {
        res.push(word);
      }
      return res;
    }, []).join('\n');
  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
