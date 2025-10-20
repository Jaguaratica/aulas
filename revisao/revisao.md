variaveis - como guardamos os dados. 
let para valores que mudam
const para valores constantes
var o jeito antigo

tipos de dados

let nome = "Juliana" -> String
let idade = 15 - > Number
let estudante = false -> Boolean

operadores aritmeticos +,-,*,/

Comparação estrita ===, 123 "123"

print("nome" + nome)
print(`Nome ${nome}`) -> Template literals

2. Estrutura de controle

if / else / elif

A principal forma de fazer o código tomar decisões. "Se (if) isso for verdade, faça A; senão (else), faça B".

switch: Útil para comparar um valor contra várias possibilidades (como os dias da semana).

3. Arrays (Listas de Dados)
O que são: Listas ordenadas de itens, onde o primeiro item está no índice 0.

Manipulação Tradicional:

Acessar: meuArray[0] (pega o primeiro item).

Adicionar ao final: .push().

Encontrar Posição: .indexOf() (descobre o índice de um item).

Remover/Substituir: .splice() (para remover ou trocar um item pelo índice).

Copiar Pedaços: .slice() (para criar um novo array a partir de uma fatia do original).

4. Laços de Repetição (Loops)
for (tradicional): O laço que usamos para repetir uma ação um número específico de vezes (ex: for (let i = 0; i < 5; i++)).

while / do-while: Para repetir uma ação enquanto uma condição for verdadeira.

forEach: A forma que mais usamos nos exercícios para "visitar" cada item de um array, sem precisar controlar o i manualmente.

5. Funções (Organização do Código)
Função Tradicional: A forma clássica de agrupar um bloco de código para que ele possa ser reutilizado.

function minhaFuncao(parametro) { ... }

Arrow Function (Função de Seta): A sintaxe moderna, mais curta e limpa.

const minhaFuncao = (parametro) => { ... }

Especialmente o retorno implícito para funções de uma linha: const dobrar = numero => numero * 2;.

