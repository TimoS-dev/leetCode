/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let start = n - 1;
  return function () {
    start = start + 1;
    console.log(start);
  };
};

const counter = createCounter(10);
counter(); // 10
counter(); // 11
counter(); // 12
