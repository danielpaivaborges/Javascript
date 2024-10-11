"use strict";
const menu = [
  {
    name: "pancakes",
    category: "breakfast"
  },
  {
    name: "burger",
    category: "lunch"
  },
  {
    name: "steak",
    category: "dinner"
  },
  {
    name: "bacon",
    category: "breakfast"
  },
  {
    name: "eggs",
    category: "breakfast"
  },
  {
    name: "pasta",
    category: "dinner"
  }
];

const categorias = [
  "TODAS",
  ...new Set(menu.map((item) => item.category.toLocaleUpperCase()))
];

const result = document.querySelector(".result");
result.innerHTML = categorias
  .map((categoria) => {
    return `<button>${categoria}</button>`;
  })
  .join("");
