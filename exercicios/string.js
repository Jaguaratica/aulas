// Exercício 1: Saudação Personalizada
// Conceitos: Variáveis, prompt, alert, concatenação simples.
// Use prompt para perguntar o nome do usuário.
// Guarde o nome em uma variável.
// Use alert para mostrar a mensagem: "Olá, [nome do usuário]! Bem-vindo(a)!".

const nome = prompt("Seu nome: "); // Guardando o nome em variável
console.log(`Olá, ${nome}! Bem-vindo(a)!`); // Mensagem de boas vindas

// Exercício 2: Informações da Frase
// Conceitos: .length para obter o tamanho total, método .toUpperCase() para a string inteira.
// Peça ao usuário para digitar uma frase usando prompt.
// Mostre no console (console.log) a frase digitada.
// Mostre no console o número total de caracteres que a frase possui (usando .length).
// Mostre no console a frase inteira em letras maiúsculas (usando .toUpperCase()).

let frase = prompt("Digite uma frase: "); // Guardando frase em variável

// informações no console ->
console.log(`Sua frase: ${frase}.`) 
console.log(`Número total de caracteres: ${frase.length}.`);
console.log(`Frase em maiúsculo: ${frase.toUpperCase()}.`);

// Exercício 3: Calculadora Simples
// Conceitos: parseFloat, operadores matemáticos (+, -, *, /), concatenação.
// Peça ao usuário dois números usando prompt. Lembre-se de convertê-los com parseFloat.
// Calcule a soma, subtração, multiplicação e divisão desses números.
// Exiba os quatro resultados no console com mensagens claras, como: "A soma de 10 e 5 é: 15".

let primeiro = parseFloat(prompt("primeiro número: ")); // Guardando n°1 em variável
let segundo = parseFloat(prompt("segundo número: ")); // Guardando n°2 em variável

// Guardando calculos em variáveis ->
const soma = primeiro + segundo;
const sub = primeiro - segundo;
const mult = primeiro * segundo;
const div = primeiro / segundo;

console.log(`Soma: ${soma}; Subtração: ${sub}; Multiplicação: ${mult}; Divisão: ${div}.`); // Informações no console

// Exercício 4: Verificador de Idade
// Conceitos: if/else, operadores de comparação (>=).
// Peça a idade do usuário e guarde em uma variável.
// Verifique se a idade é maior ou igual a 18.
// Se for, exiba um alert com a mensagem: "Você é maior de idade.".
// Caso contrário, exiba: "Você é menor de idade.".

let idade = parseFloat(prompt("Escreva sua idade: ")); // Guardando idade em variável

// Verificar se é maior de idade ->
if (idade > 18) { 
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// Exercício 5: Calculadora de Média Escolar
// Conceitos: Cálculos, if/else if/else.
// Peça ao usuário as 3 notas de um aluno.
// Calcule a média das três notas.
// Use a estrutura if/else if/else para mostrar no console uma das seguintes mensagens:
// "Reprovado" (se a média for menor que 5).
// "Recuperação" (se a média for entre 5 e 7).
// "Aprovado" (se a média for maior ou igual a 7).

// Guardando notas em variáveis
const nota1 = parseFloat(prompt("Escreva sua 1° nota:"));
const nota2 = parseFloat(prompt("Escreva sua 2° nota:"));
const nota3 = parseFloat(prompt("Escreva sua 3° nota:"));
const media = (nota1 + nota2 + nota3) / 3;

// Informações no console
if (media < 5) {
    console.log("Você está reprovado.");
} else if (media > 7) {
    console.log("Você está aprovado.");
} else {
    console.log("Você está de recuperação.");
}


