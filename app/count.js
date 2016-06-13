exports = typeof window === 'undefined' ? global : window;

var intervalTimer;

exports.countAnswers = {
  count: function (start, end) {
    let count = start;

    console.log(count);

    intervalTimer = setInterval(function() {
      count++;
      if (count <= end) {
        console.log(count);
      } else {
        clearInterval(intervalTimer);
      }
    }, 100);

    return {
      cancel: function() {
        clearInterval(intervalTimer);
      }
    };
  }
};
