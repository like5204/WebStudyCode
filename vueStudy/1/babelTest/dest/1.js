"use strict";

var a = 123;
var b = [4, 78, 23, 11, 90];
var c = b.reduce(function (tmp, item) {
  return tmp + item;
});
console.log(b);
console.log(c);
