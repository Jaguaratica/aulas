// 1. .map() - O Transformador
// O .map() é o substituto direto do laço for quando seu objetivo é transformar cada item de 
// um array em algo novo.

// Ele NÃO modifica o array original.

// Ele SEMPRE retorna um novo array com o mesmo número de itens do original.


// Exemplo 1: Dobrar os números

// O modo "antigo" (usando forEach, que já é melhor que um 'for' manual)
// numeros = [5, 10, 15, 20, 25];
// dobros = []; // 1. Precisa criar um array vazio

// numeros.forEach(function(numDobro){ // 2. Precisa iterar
//     dobros.push(numDobro * 2) // 3. Precisa "empurrar" (push) manualmente
// });

// console.log(dobros); // Saída: [10, 20, 30, 40, 50]

// Agora, com .map():

// const numeros = [5, 10, 15, 20, 25];

// 1. Diga o que fazer com CADA item (a arrow function)
// 2. O .map cuida de criar o novo array e adicionar os itens
// function(numero) { return numero * 2; }
// const dobros = numeros.map((numero) => { 
//     return numero * 2
// });

// console.log(dobros); // Saída: [10, 20, 30, 40, 50]

// O array de objetos original
const candidatos = [
    { nome: 'Ana Silva', idade: 28, vaga: 'Frontend' },
    { nome: 'Bruno Costa', idade: 35, vaga: 'Backend' },
    { nome: 'Carla Dias', idade: 23, vaga: 'Frontend' }
];

const objetos = candidatos.map((candidato) => {return candidato.nome});

const devsBackend = candidatos.filter(candidato => candidato.vaga == "Backend")

console.log(objetos)
console.log('-------------------------------')
console.log('devsBackend')
console.log(devsBackend)

// Usando .map() para transformar cada OBJETO em uma STRING (o nome)

// 2. .filter() - O Selecionador
// O .filter() é usado quando você quer selecionar itens de um array que passam em um teste.

// Ele NÃO modifica o array original.

// Ele SEMPRE retorna um novo array, mas apenas com os itens que passaram no teste (o array final pode ser menor que o original).

// O modo "antigo" (com forEach e if)
emails = ["usuario1@gmail.com", "contato@hotmail.com", "dev@gmail.com"];
emailsValidosFunction = []; // 1. Precisa criar um array vazio

emails.forEach(function(email){
    if (email.includes("@gmail.com")){ // 2. Precisa de um 'if'
        emailsValidosFunction.push(email); // 3. Precisa "empurrar" manualmente
    }
});
console.log('-------------------------------')
console.log(emailsValidosFunction); // Saída: ["usuario1@gmail.com", "dev@gmail.com"]

// Agora, com .filter()

// const emails = ["usuario1@gmail.com", "contato@hotmail.com", "dev@gmail.com"];

// A arrow function é o próprio teste:
// email.includes("@gmail.com") já retorna true ou false
const emailsValidos = emails.filter((email) => {
    return email.includes("@gmail.com")
});

// true, false, true

console.log(emailsValidos); // Saída: ["usuario1@gmail.com", "dev@gmail.com"]

