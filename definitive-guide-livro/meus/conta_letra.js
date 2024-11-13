let frequencia = {}

let palavra = 'Carolaine'

for(let letra of palavra){
    if(frequencia[letra]){
        frequencia[letra]++
    }else{
        frequencia[letra] = 1
    }
}

console.log(frequencia)