
do {
    console.log('oi do while')
}while(1 == 2)

while(1 == 2) {
    console.log('oi while')
}

const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Morango"];

// for (let indice = 0; indice < frutas.length; indice++)
//     console.log(frutas[indice])

// O forEach diz: "Para cada 'fruta' dentro do array 'frutas', execute esta função"
frutas.forEach(function(fruta){
    console.log(fruta)
})