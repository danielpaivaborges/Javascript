
'use strict'

let stringGrande = 'Pulp Fiction é um grande filme de ação'
//método SLICE
console.log(stringGrande.slice(5, stringGrande.length))
console.log(stringGrande.slice(5, -10))

//método SUBSTR
let novaString = stringGrande.substring(0, 4)
console.log(novaString)

//método SPLIT
let matriz = stringGrande.split(' ')
console.log(matriz)

//método INDEXOF
console.log(stringGrande.indexOf('filme'))

//méotodo LASTINDEXOF
console.log(stringGrande.lastIndexOf('a'))

