// Array/ Vetor
frutas = ["Maçã", "Banana", "Laranja", "Uva", "Morango"]
frutaInicial = 'Banana'
// indexOf -> encontrar o indice de um determinado elemento.
const indiceInicial = frutas.indexOf(frutaInicial);
// console.log(indiceInicial)

if(indiceInicial == -1){
    //não encontrou esse elemento no array
    console.log("A fruta não foi encontrada");
    // return;
}

// slice ->  cria um novo array a partir de um ponto
const novaLista = frutas.slice(0, 4)
// console.log(novaLista)
// ----------------------------------------------------------------------

const indiceFrutaInicial = 2;
const indiceFrutaFinal = 4;

// console.log(frutas[2])

for (let indice = indiceFrutaInicial; indice<=indiceFrutaFinal; indice++){
    // if(frutas[indice] != "Maçã")
        console.log(frutas[indice])
}
// const INICIO_ARRAY= 1
// const FIM_ARRAY= 4

// for (let indice = INICIO_ARRAY; indice<FIM_ARRAY; indice++){
//     if(frutas[indice] != "Maçã")
//         console.log(frutas[indice])
// }


//  1. O Array é uma "Prateleira" Ordenada
//  Conceito: É uma estrutura que guarda uma coleção de dados em uma ordem específica. A ordem em que você adiciona os itens é a ordem em que eles ficam armazenados.
//  Ênfase: Pense nele como uma estante onde cada item tem seu lugar definido, um após o outro. Não é um saco de coisas jogadas aleatoriamente.

//  2. O Índice é o "Endereço Fixo" de Cada Item
//  Conceito: Cada espaço na "prateleira" (cada elemento no array) é identificado por um número único chamado índice.
//  Ênfase: A regra mais importante: a contagem dos índices SEMPRE começa em ZERO (0). O primeiro item está no índice `0`, o segundo no `1`, e assim por diante. Esquecer isso é o erro mais comum para iniciantes.

//  3. Acesso Direto é a "Mágica" dos Arrays
//  Conceito: Você pode pegar qualquer item instantaneamente se souber o número da sua prateleira (seu índice).
//  Ênfase: Usar `array[5]` não faz o computador procurar pelo sexto item; ele vai diretamente para a sexta posição e o pega. É por isso que arrays são tão rápidos e eficientes para acessar dados.

//  4. Busca por Valor é "Traduzir o Item para o Endereço"
//  Conceito: O computador não entende "pegue a partir da Laranja". Primeiro, ele precisa descobrir que "Laranja" está no endereço (índice) `2`.
//  Ênfase: Funções como `.indexOf()` ou `.index()` são suas ferramentas de "tradução". Elas convertem um valor que você conhece ("Laranja") em um índice que o computador pode usar (`2`).

//  5. Fatiamento (Slicing) é "Copiar um Pedaço da Prateleira"
//  Conceito: É a operação de criar um novo array a partir de uma porção do array original. O original não é modificado.
//  Ênfase:
//      Do início ao fim: `array[inicio:]` — Pega tudo daquele ponto em diante.
//      Entre dois pontos: `array[inicio:fim]` — Pega o pedaço entre os dois índices. Lembre-se que, na maioria das linguagens, o item no índice `fim` não é incluído, por isso frequentemente usamos `fim + 1` para incluir o último elemento desejado.

//  6. Modificar é "Trabalhar Diretamente na Prateleira"
//  Conceito: Você pode alterar, adicionar ou remover itens do array.
//  Ênfase:
//      Alterar: Para trocar um item, você acessa a prateleira pelo índice e coloca algo novo lá: `array[2] = "Abacaxi"`.
//      Adicionar/Remover: Você pode adicionar itens no final (`.push()` ou `.append()`) ou remover de posições específicas, o que "reorganiza" os itens restantes.

// append -> manipula arquivos html
// push -> nativo de js

//  7. A Ordem dos Fatores Altera o Produto
//  Conceito: A ordem dos seus dados no array define como o fatiamento e o acesso funcionam.
//  Ênfase: Se você pede um trecho "entre Laranja e Maçã", o código precisa primeiro achar os índices (`2` e `0`) e então entender que a fatia deve ir do menor para o maior (`0` para `2`), respeitando a ordem original da prateleira.


