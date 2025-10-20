// 1. .map() - O Transformador
// O .map() é o substituto direto do laço for quando seu objetivo é transformar cada item de 
// um array em algo novo.

// Ele NÃO modifica o array original.

// Ele SEMPRE retorna um novo array com o mesmo número de itens do original.


// Exemplo 1: Dobrar os números

// O modo "antigo" (usando forEach, que já é melhor que um 'for' manual)
numeros = [5, 10, 15, 20, 25];
dobros = []; // 1. Precisa criar um array vazio

numeros.forEach(function(numDobro){ // 2. Precisa iterar
    dobros.push(numDobro * 2) // 3. Precisa "empurrar" (push) manualmente
});

console.log(dobros); // Saída: [10, 20, 30, 40, 50]

// Agora, com .map():

// const numeros = [5, 10, 15, 20, 25];

// 1. Diga o que fazer com CADA item (a arrow function)
// 2. O .map cuida de criar o novo array e adicionar os itens
// function(numero) { return numero * 2; }
const dobros = numeros.map((numero) => { 
    return numero * 2
});

console.log(dobros); // Saída: [10, 20, 30, 40, 50]

// O array de objetos original
const candidatos = [
    { nome: 'Ana Silva', idade: 28, vaga: 'Frontend' },
    { nome: 'Bruno Costa', idade: 35, vaga: 'Backend' },
    { nome: 'Carla Dias', idade: 23, vaga: 'Frontend' }
];

// Usando .map() para transformar cada OBJETO em uma STRING (o nome)
