(function (A, B, C) {

  var fns = [A, B, C];

  fns.forEach(function (fn) {
    fn.say();
  });

} (A, B, C));