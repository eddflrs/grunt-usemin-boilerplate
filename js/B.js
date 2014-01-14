(function (root) {
  var B = {};
  B.say = function () {
    console.log('say from B');
  };
  root.B = B;
} (this));