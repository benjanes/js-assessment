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

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
