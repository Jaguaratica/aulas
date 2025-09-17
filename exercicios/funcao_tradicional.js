// Nível 1: Funções Básicas
// Estes exercícios focam na sintaxe fundamental e na reutilização de código simples.

// Exercício 1: Saudação Personalizada
// Objetivo: Criar uma função que recebe um nome como argumento e exibe uma saudação no console.
// Por que usar uma função? Para reutilizar a mesma estrutura de saudação para diferentes nomes.
// --------------------------------------------------------

function saudacao(nome) {
    return `Olá ${nome}, seja muito bem-vindo`;
}

console.log(saudacao("Gustavo"));
// --------------------------------------------------------
// Exercício 2: Par ou Ímpar
// Objetivo: Criar uma função que recebe um número e retorna true se for par e false se for ímpar.
// Por que usar uma função? Para encapsular a lógica de verificação e poder usá-la em diferentes partes do seu programa.
// --------------------------------------------------------

function parImpar(numero) {
    if (numero % 2 === 0){
        console.log(`O número ${numero} é par`);
    } else {
        console.log(`O número ${numero} é impar`);
    }
}

console.log(parImpar(27));

// --------------------------------------------------------
// Nível 2: Funções com Arrays e Objetos
// Aqui, as funções nos ajudam a manipular coleções de dados de forma eficiente.

// Exercício 3: Encontrar o Maior Número em um Array
// Objetivo: Criar uma função que recebe um array de números e retorna o maior valor.
// Por que usar uma função? Para abstrair a lógica de iteração e comparação, tornando a busca pelo maior número uma operação simples e reutilizável.
// --------------------------------------------------------



// --------------------------------------------------------
// Exercício 4: Extrair Informações de um Objeto
// Objetivo: Criar uma função que recebe um objeto representando um usuário (com propriedades nome, idade e email) e retorna uma string formatada com essas informações.
// Por que usar uma função? Para padronizar a forma como as informações do usuário são exibidas.
// --------------------------------------------------------



// --------------------------------------------------------
// Nível 3: Funções e Manipulação do DOM
// Este é um dos usos mais comuns de funções em desenvolvimento web front-end.

// Exercício 5: Alterar o Texto de um Elemento
// Objetivo: Criar uma função que, ao ser chamada, altera o texto de um parágrafo em uma página HTML.
// Por que usar uma função? Para responder a uma ação do usuário (como um clique de botão) e modificar a interface.
// --------------------------------------------------------



// --------------------------------------------------------
// Exercício 6: Adicionar um Item a uma Lista
// Objetivo: Criar uma função que adiciona um novo item a uma lista não ordenada (<ul>) a partir do valor de um campo de input.
// Por que usar uma função? Para encapsular a lógica de criação de um novo elemento, definição de seu conteúdo e inserção no DOM.