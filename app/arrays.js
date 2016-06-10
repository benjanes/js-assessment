exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((sum, item) => sum + item);
  },

  remove: function(arr, item) {
    return arr.filter(val => val !== item);
  },

  removeWithoutCopy: function(arr, item) {
    while (~arr.indexOf(item)) {
      arr.splice(arr.indexOf(item), 1);
    }
    return arr;
  },

  append: function(arr, item) {
    return arr.concat([item]);
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    return [item].concat(arr);
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.reduce((count, val) => {
      if (val === item) count++;
      return count;
    }, 0);
  },

  duplicates: function(arr) {
    return arr.reduce((dups, val) => {
      if (arr.indexOf(val) !== arr.lastIndexOf(val) && !~dups.indexOf(val)) dups.push(val);
      return dups;
    }, []);
  },

  square: function(arr) {
    return arr.map(val => val * val);
  },

  findAllOccurrences: function(arr, target) {
    return arr.reduce((idxs, val, idx) => {
      if (val === target) idxs.push(idx);
      return idxs;
    }, []);
  }
};
