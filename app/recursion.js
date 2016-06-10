exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    const files = [];

    function addFiles(dirStructure) {
      if (typeof dirStructure !== 'object') {
        files.push(dirStructure);
        return;
      }
      dirStructure.files.forEach(file => addFiles(file));
    }
    addFiles(data);
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
        console.log(chunk);
        remainder.push(val);
      }
    })([], arr.slice());

    return answer;
  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
