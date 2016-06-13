exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var files = [];
    var dirs = [];
    
    data.files.forEach(file => {
      if (typeof file === 'string') {
        files.push(file);
      } else {
        dirs.push(file);
      }
    });
    
    for (var i = 0; i < dirs.length; i++) {
      if (dirName && dirs[i].dir === dirName) {
        return this.listFiles(dirs[i]);
      } else {
        files = files.concat(this.listFiles(dirs[i]));
      }
    }
    
    return files;
  },

  permute: function(arr) {
    const answer = [];

    (function permutate(chunk, remainder) {
      if (chunk.length === arr.length) {
        answer.push(chunk);
        return;
      }

      for (let i = 0; i < remainder.length; i++) {
        var val = remainder.shift();
        permutate(chunk.concat([val]), remainder);
        remainder.push(val);
      }
    })([], arr.slice());

    return answer;
  },

  fibonacci: function(n) {
    if (n < 1) return 0;
    if (n === 1) return 1;
    n--;
    var res = 0;
    var next = 0;
    var memo = 0;
    while(n) {
      res = res ? res : 1;
      next = res;
      res += memo;
      memo = next;
      n--;
    }
    return res;
  },

  validParentheses: function(n) {
    var parens = [];
    var res = {};
    while (n) {
      parens = parens.concat(['(', ')']);
      n--;
    }
    
    (function findValid(chunk, remainder, open, close) {
      if (chunk.length === parens.length) {
        res[chunk] = true;
        return;
      }
      if (close > open) return;
      
      remainder.forEach((char, idx) => {
        var o = open;
        var c = close;
        if (char === '(') o += 1;
        if (char === ')') c += 1;
        findValid(chunk + char, remainder.slice(0, idx).concat(remainder.slice(idx + 1)), o, c);
      });
    })(parens[0], parens.slice(1), 1, 0);
    
    return Object.keys(res);
  }
};
