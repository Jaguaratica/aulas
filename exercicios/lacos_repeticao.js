// Nível 1: Básico (Apenas Lendo e Exibindo)
// O objetivo aqui é se familiarizar com a sintaxe do laço de repetição (`loop`) para "visitar" cada item.
// Exercício 1: Tour pela Galáxia
// Você tem uma lista de destinos espaciais. Sua tarefa é criar um programa que anuncie a visita a cada um deles.
// `destinos = ["A Lua", "Marte", "Estação Espacial Internacional", "Nebulosa de Órion"]`
// Tarefa:
//    Use um laço de repetição para percorrer o array `destinos`.
//    Para cada destino, exiba a mensagem: "Próxima parada: [nome do destino]".
// Exemplo de Saída Esperada:
// ```
// Próxima parada: A Lua
// Próxima parada: Marte
// Próxima parada: Estação Espacial Internacional
// Próxima parada: Nebulosa de Órion
// ```
// ---------------------------------------------------------------------

/*
destinos = ["A Lua", "Marte", "Estação Espacial Internacional", "Nebulosa de Órion"];

destinos.forEach(function(destino){
    console.log(`Próxima parada: ${destino}`)
})
*/

// ---------------------------------------------------------------------
// Nível 2: Intermediário (Criando um Novo Array)
// Aqui, vamos usar um laço para transformar os dados de um array e guardar o resultado em um novo array.
// Exercício 2: Calculadora de Dobro
// Você recebeu uma lista de números e precisa criar uma nova lista onde cada número seja o dobro do original.
// `numeros = [5, 10, 15, 20, 25]`
// Tarefa:
// 1.  Crie um novo array vazio chamado `dobros`.
// 2.  Use um laço de repetição para percorrer o array `numeros`.
// 3.  Dentro do laço, calcule o dobro de cada número.
// 4.  Adicione o resultado ao array `dobros`.
// 5.  No final, exiba o array `dobros` completo.
// ---------------------------------------------------------------------

numeros = [5, 10, 15, 20, 25];

dobros = [];

numeros.forEach(function(numDobro){
    dobros.push(numDobro * 2)
});

console.log(dobros);

// ---------------------------------------------------------------------
// Nível 3: Avançado (Loop com Condição)
// Agora, vamos combinar laços com uma condição (`if`) para processar apenas os itens que nos interessam.
// Exercício 3: Filtrando E-mails
// Você está criando um filtro de spam. Você tem uma lista de e-mails e quer separar apenas os que são de um domínio confiável (neste caso, `@gmail.com`).
// `emails = ["usuario1@gmail.com", "contato@hotmail.com", "dev@gmail.com", "empresa@yahoo.com", "aluno@gmail.com"]`
// Tarefa:
// 1.  Crie um novo array vazio chamado `emailsValidos`.
// 2.  Use um laço para percorrer o array `emails`.
// 3.  Dentro do laço, verifique se o e-mail contém o texto "@gmail.com".
// 4.  Se a condição for verdadeira, adicione o e-mail ao array `emailsValidos`.
// 5.  Ao final, exiba a lista `emailsValidos`.
// ---------------------------------------------------------------------

emails = ["usuario1@gmail.com", "contato@hotmail.com", "dev@gmail.com", "empresa@yahoo.com", "aluno@gmail.com"];

emailsValidos = [];

emails.forEach(function(email){
    if (email.includes("gmail.com")){
        emailsValidos.push(email);
    }
});

console.log(emailsValidos);

// ---------------------------------------------------------------------
// Desafio Final: Processando Dados Complexos
// Este desafio envolve percorrer um array de objetos, que é um cenário muito comum em programação real.
// Desafio: Calculando o Total do Carrinho de Compras
// Você tem um carrinho de compras representado por um array. Cada item no array é um objeto que tem duas propriedades: `nome` e `preco`.
// ```javascript
// // Exemplo em JavaScript
// const carrinho = [
//   { nome: "Maçã", preco: 3.50 },
//   { nome: "Leite", preco: 5.80 },
//   { nome: "Pão", preco: 7.20 },
//   { nome: "Chocolate", preco: 6.00 }
// ];
// ```
// Tarefa:
// 1.  Crie uma variável chamada `total` e inicie-a com o valor `0`.
// 2.  Use um laço de repetição para percorrer cada `produto` no `carrinho`.
// 3.  Dentro do laço, acesse a propriedade `preco` de cada produto e some o seu valor à variável `total`.
// 4.  Após o laço terminar, exiba uma mensagem com o valor final, por exemplo: "O valor total da sua compra é R$ XX.XX".
// ---------------------------------------------------------------------


let total = '';
console.log(total, 'total');

console.log(total + 'ola mundo', 'total somando')

const carrinho = [{ nome: "Maçã", preco: 3.50 },{ nome: "Leite", preco: 5.80 },{ nome: "Pão", preco: 7.20 },{ nome: "Chocolate", preco: 6.00 }]

const items = [ "Maçã", "Leite", "Pão", "Chocolate"]
const precoItems = [3.50, 5.80, 7.20, 6.00]


const item = {
    nome: "Maçã",
    preco: 3.50
}

const item1 = {
    nome: "Leite",
    preco: 5.80
}

const item2 = {
    nome: "Pão",
    preco: 7.20
}

const item3 = {
    nome: "Chocolate",
    preco: 6.00
}


const array = [item, item1, item2, item3]

// console.log(item.nome, item.preco)

array.forEach(function(item,index){
    if (item.nome === "Leite") {
        console.log(item.nome, item.preco);
    }
});

// Cenário: Recrutamento de Desenvolvedores
// Para todos os exercícios abaixo, vamos usar a seguinte lista de candidatos para vagas de tecnologia. Cada candidato é um objeto com várias propriedades.

// JavaScript

// // Estrutura de dados para os exercícios
// const candidatos = [
//   { nome: 'Ana Silva', idade: 28, vaga: 'Frontend', senioridade: 'Pleno', tecnologias: ['React', 'CSS', 'JavaScript'] },
//   { nome: 'Bruno Costa', idade: 35, vaga: 'Backend', senioridade: 'Sênior', tecnologias: ['Python', 'Django', 'PostgreSQL'] },
//   { nome: 'Carla Dias', idade: 23, vaga: 'Frontend', senioridade: 'Júnior', tecnologias: ['Vue', 'CSS', 'JavaScript'] },
//   { nome: 'Daniel Faria', idade: 31, vaga: 'Fullstack', senioridade: 'Pleno', tecnologias: ['React', 'Node.js', 'TypeScript'] },
//   { nome: 'Elena Moraes', idade: 29, vaga: 'Backend', senioridade: 'Pleno', tecnologias: ['Python', 'Flask', 'MongoDB'] }
// ];

// Exercício 1: Apresentação dos Candidatos (Acesso a Propriedades)
// Objetivo: Praticar o acesso às propriedades de cada objeto dentro de um loop.

// Tarefa:

// Crie um laço de repetição que percorra a lista de candidatos.

// Para cada candidato, exiba uma mensagem de apresentação no formato: "[Nome], [Idade] anos, se candidatou para [Vaga] [Senioridade]."

// Exemplo de Saída para o primeiro candidato:
// Ana Silva, 28 anos, se candidatou para Frontend Pleno.

// Exercício 2: Filtrando por Vaga (Criando um Novo Array)
// Objetivo: Praticar a criação de uma nova lista baseada em uma condição.

// Tarefa:

// Crie um novo array vazio chamado desenvolvedoresBackend.

// Percorra a lista de candidatos.

// Se a vaga de um candidato for igual a "Backend", adicione o objeto completo do candidato ao array desenvolvedoresBackend.

// No final, exiba o novo array desenvolvedoresBackend.

// Exercício 3: Buscando um Candidato Específico (Condições Múltiplas)
// Objetivo: Praticar a busca por um item que satisfaça mais de uma condição.

// Tarefa:

// Encontre o nome do primeiro candidato da lista que seja Pleno e também da área Frontend.

// Exiba o nome encontrado ou uma mensagem "Nenhum candidato Pleno de Frontend encontrado." caso não haja nenhum.

// Desafio Final: Caça-Talentos por Tecnologia (Trabalhando com Arrays Aninhados)
// Objetivo: Praticar o acesso a um array que está dentro de um objeto.

// A propriedade tecnologias é um array! Sua tarefa é encontrar todos os candidatos que dominam uma tecnologia específica.

// Tarefa:

// Crie um novo array vazio chamado especialistasPython.

// Percorra a lista de candidatos.

// Para cada candidato, verifique se a sua lista de tecnologias inclui a string "Python".

// Se incluir, adicione apenas o nome do candidato ao array especialistasPython.

// No final, exiba o array especialistasPython.

