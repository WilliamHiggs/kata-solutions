"use strict";

const isAnagram = function isAnagram(test, original) {
  var trueOrFalse = null;
  if (test.length === original.length) {
    var testSorted = test
      .toLowerCase()
      .split("")
      .sort();
    var originalSorted = original
      .toLowerCase()
      .split("")
      .sort();
    for (var i = 0; i < testSorted.length; i++) {
      if (testSorted[i] === originalSorted[i]) {
        trueOrFalse = true;
      } else {
        trueOrFalse = false;
        break;
      }
    }
  } else {
    trueOrFalse = false;
  }
  return trueOrFalse;
};
