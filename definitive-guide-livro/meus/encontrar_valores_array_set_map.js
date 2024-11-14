"use strict";
const encontrarValoresUnicos = (...arrays) => {
  const uniqueSet = new Set([...arrays.flat()]);

  const countMap = new Map();
  uniqueSet.forEach((item) => {
    const contador = arrays.reduce((acc, arr) => acc + arr.includes(item), 0);
    countMap.set(item, contador);
  });
  return countMap;
};

const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [2, 3, 4, 5, 6, 7, 8];
const array3 = [7, 8, 9, 10];


console.log(encontrarValoresUnicos(array1, array2, array3));