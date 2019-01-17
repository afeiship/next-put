var nx = require('next-js-core2');
require('../src/next-put');

test('nx.put', function() {
  var obj1 = { name: 'fei', age: 100, hobby: 'coding' };
  var obj_rs = {};
  var arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
  var arr_rs = [];
  nx.each(obj1, (key, value) => {
    nx.put(obj_rs, key, value);
  });

  nx.each(arr1, (key, value) => {
    nx.put(arr_rs, key, value);
  });

  // console.log(obj_rs, arr_rs);

  expect(obj_rs).toEqual(obj1);
  expect(arr_rs).toEqual(arr1);
});
