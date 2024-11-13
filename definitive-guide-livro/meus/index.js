"use strict";
let contador = {}
let palavra = 'mississipi'

for(let letra of palavra){
    if(contador[letra]){
        contador[letra]++
    }else {
        contador[letra] = 1
    }
}

console.log(contador)