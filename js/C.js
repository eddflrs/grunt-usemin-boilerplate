(function (root) {
  var C = {};
  C.say = function () {
    console.log('say from C');
  };
  root.C = C;
} (this));