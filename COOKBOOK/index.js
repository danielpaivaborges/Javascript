"use strict";
const valorRaw = 590.35;
const valorReal = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'brl'})
console.log(valorReal.format(valorRaw))