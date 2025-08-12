// == (igualdade solta) e === (igualdade estrita).

const codigoCorreto = 123;
const codigoDigitadoPeloUsuario = "123";

console.log("--- Demonstração com == e === ---");
console.log(`Tipo do codigoCorreto: ${typeof codigoCorreto}`); // 'number'
console.log(`Tipo do codigoDigitadoPeloUsuario: ${typeof codigoDigitadoPeloUsuario}`); // 'string'
console.log("---------------------------------------");

// --- Teste 1: Usando == (Igualdade Solta) ---
console.log(`Comparando com == : ${codigoCorreto} == "${codigoDigitadoPeloUsuario}"`);

if (codigoCorreto == codigoDigitadoPeloUsuario) {
  console.log("Resultado: Verdadeiro (true). Acesso PERMITIDO.");
  console.log("Explicação: O JavaScript converteu a string '123' para o número 123 antes de comparar. Por isso, considerou os valores iguais.");
} else {
  console.log("Resultado: Falso (false). Acesso NEGADO.");
}

console.log("\n---------------------------------------\n");

// --- Teste 2: Usando === (Igualdade Estrita) ---
console.log(`Comparando com === : ${codigoCorreto} === "${codigoDigitadoPeloUsuario}"`);

if (codigoCorreto === codigoDigitadoPeloUsuario) {
  console.log("Resultado: Verdadeiro (true). Acesso PERMITIDO.");
} else {
  console.log("Resultado: Falso (false). Acesso NEGADO.");
  console.log("Explicação: Embora o valor seja o mesmo, os tipos são diferentes ('number' vs 'string'). A igualdade estrita não faz conversão e, por isso, os considera diferentes.");
}
