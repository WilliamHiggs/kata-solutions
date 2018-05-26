"use strict";

function flattenAndSort(arr) {
  return arr.length !== 0 ? arr.reduce((a,b) => a.concat(b)).sort((a,b) => a-b) : arr;
}
