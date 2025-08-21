// Array/ Vetor
frutas = ["Maçã", "Banana", "Laranja", "Uva", "Morango"]
frutaInicial = 'Banana'
// indexOf -> encontrar o indice de um determinado elemento.
const indiceInicial = frutas.indexOf(frutaInicial);
// console.log(indiceInicial)

if(indiceInicial == -1){
    //não encontrou esse elemento no array
    console.log("A fruta não foi encontrada");
    // return;
}

// slice ->  cria um novo array a partir de um ponto
const novaLista = frutas.slice(0, 4)
// console.log(novaLista)
// ----------------------------------------------------------------------

const indiceFrutaInicial = 2;
const indiceFrutaFinal = 4;

// console.log(frutas[2])

for (let indice = indiceFrutaInicial; indice<=indiceFrutaFinal; indice++){
    // if(frutas[indice] != "Maçã")
        console.log(frutas[indice])
}
// const INICIO_ARRAY= 1
// const FIM_ARRAY= 4

// for (let indice = INICIO_ARRAY; indice<FIM_ARRAY; indice++){
//     if(frutas[indice] != "Maçã")
//         console.log(frutas[indice])
// }