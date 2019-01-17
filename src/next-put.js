(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.put = function(inTarget, inKey, inValue) {
    var isArray = inTarget instanceof Array;
    if (isArray) {
      inTarget.push(inValue);
    } else {
      inTarget[inKey] = inValue;
    }
    return inTarget;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.put;
  }
})();
