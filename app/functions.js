exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(str2) {
      return `${str}, ${str2}`;
    }
  },

  makeClosures: function(arr, fn) {
    return arr.map(val => {
      return fn.bind(null, val);
    });
  },

  partial: function(fn, str1, str2) {
    return function(str3) {
      return fn.call(null, str1, str2, str3);
    }
  },

  useArguments: function() {
    return [].slice.call(arguments).reduce((tot, arg) => {
      return tot + arg;
    });
  },

  callIt: function(fn) {
    const args = [].slice.call(arguments, 1);
    return fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {
    const args = [].slice.call(arguments, 1);
    return function() {
      return fn.apply(null, args.concat([].slice.call(arguments)));
    }
  },

  curryIt: function(fn) {
    var args = [];
    function addArg(x) {
      args.push(x);
      if (args.length < 3) return addArg;
      return fn.apply(null, args);
    }
    return addArg;
  }
};
