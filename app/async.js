exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(function(resolve, reject) {
      resolve(value);
    });
  },

  manipulateRemoteData: function(url) {
    return new Promise(function(resolve, reject) {
      $.ajax(url).done(data => {
        const list = data.people.map(person => person.name).sort();
        resolve(list);
      });
    });
  }
};
