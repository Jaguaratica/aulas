let primeiroNome = "Maria";
let ultimoNome = "Silva";
let espaco = " ";

let nomeCompleto = primeiroNome + espaco + ultimoNome;

console.log(nomeCompleto); // Saída: "Maria Silva"

// Você também pode juntar strings com outros tipos de dados
let idade = 30;
let frase = "A idade dela é " + idade;

console.log(frase);

//Usando Template Literals (Template Strings)

let produto = "Café";
let preco = 8.50;
let quantidade = 2;

let mensagem = `Você comprou ${quantidade} unidades de ${produto} pelo preço de R$ ${preco.toFixed(2)} cada.`;

console.log(mensagem);

// Usando o método concat()

let str1 = "Olá";
let str2 = "Mundo";
let str3 = "!";
let saudacao = str1.concat(" ", str2, str3);

console.log(saudacao); // Saída: "Olá Mundo!"

// Comprimento da String (.length) - Comprimento da String (.length)
let texto = "JavaScript"
console.log(texto.length)

// uma condicao na qual eh fornecida uma senha 123 e é exibido que a senha é muito curta, ela deve pelo menos 8 caracteres.
let senha = "123";