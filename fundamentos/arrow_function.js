


// console.log(somar())
// Elas nos permitem escrever funções de forma mais curta e resolvem um problema histórico 
// do JavaScript com o contexto da palavra-chave this.

function somar(a, b) {
    return a + b;
}

console.log(somar(3,6))

const somarArrow = (a, b) => {
  return a + b;
};

// Se a sua função tem apenas uma linha e essa linha é a instrução de retorno, você pode omitir as chaves {} e a palavra-chave return.
const somarArrowFunction = (a,b) => a+b;

console.log(somarArrowFunction(1,2))

function dobrarNormal(numero){
    return numero*2;
}

// Com retorno explícito
const dobrarExplicito = (numero) => {
    return numero * 2;
}

console.log(dobrarExplicito(1000))


// Com retorno implícito (muito mais limpo)
const dobrarImplicito = numero => numero *2;

console.log(dobrarImplicito(5))

// Regras de Parênteses
// Um parâmetro: Os parênteses () são opcionais.
const nome = "ju";
const saudacao = nome => `Olá, ${nome}!`;

// Múltiplos parâmetros ou nenhum parâmetro: Os parênteses são obrigatórios.
const criarPessoa = (nome, idade) => ({ nome: nome, idade: idade });
const getPI = () => 3.1415;