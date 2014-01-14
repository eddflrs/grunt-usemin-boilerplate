(function (root) {
  var A = {};
  A.say = function () {
    console.log('say from A');
  };

  root.A = A;
} (this));