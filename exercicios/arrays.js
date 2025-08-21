// Exercício 1: Sistema Solar
// Considere o array abaixo, que representa os planetas do nosso sistema solar em ordem.
// planetas = ["Mercúrio", "Vênus", "Terra", "Marte", "Júpiter", "Saturno", "Urano", "Netuno"]
// Tarefas:
// Escreva o código para exibir o nome do nosso planeta, a "Terra".
// Exiba o quinto planeta do sistema solar.
// Qual é o planeta no índice 0? Exiba o resultado.
// Tente acessar o índice 8. O que acontece? (Pense sobre isso, não precisa necessariamente rodar o código se souber a resposta).

/*
planetas = ["Mercúrio", "Vênus", "Terra", "Marte", "Júpiter", "Saturno", "Urano", "Netuno"];

console.log(planetas[2])

console.log(planetas[4])

console.log(planetas[0])

console.log(planetas[8])
*/

// Exercício 2: Lista de Compras
// Você está com a seguinte lista de compras em um array:
// listaDeCompras = ["Arroz", "Feijão", "Macarrão", "Azeite", "Sal"]
// Tarefas:
// Você quer verificar se já pegou "Azeite". Encontre o índice de "Azeite" na lista.
// Você decidiu que não quer mais "Macarrão" e vai levar "Batata" no lugar. Altere o item "Macarrão" para "Batata" na lista original.
// Faltou um item! Adicione "Leite" ao final da sua lista de compras.
// Depois de todas as alterações, exiba a lista de compras final.

// -----------> Encontrando o indice de Azeite
listaDeCompras = ["Arroz", "Feijão", "Macarrão", "Azeite", "Sal"]

let indiceAzeite = listaDeCompras.indexOf("Azeite");
console.log("Índice de Azeite:", indiceAzeite);

// -----------> Trocando Macarrão por Batata

let indiceMacarrao = listaDeCompras.indexOf("Macarrão");

if (indiceMacarrao != -1) {
  listaDeCompras[indiceMacarrao] = "Batata";
}

// -----------> Adicionando Leite e exibindo lista

listaDeCompras.push("Leite");

console.log("Lista final de compras:", listaDeCompras);

// Exercício 3: Playlist de Músicas
// Imagine que você tem uma playlist de músicas para uma viagem.
// playlist = ["Bohemian Rhapsody", "Hotel California", "Stairway to Heaven", "Imagine", "Like a Rolling Stone", "Smells Like Teen Spirit"]
// Tarefas:
// A viagem começou e você quer ouvir a partir de "Stairway to Heaven" até o final. Crie uma nova lista chamada viagemComecou que contenha essa parte da playlist.
// Você só tem tempo para ouvir as músicas que estão entre "Hotel California" e "Like a Rolling Stone" (incluindo as duas). Crie uma nova lista chamada trechoCurto com essa seleção.
// Crie uma terceira lista chamada asTresPrimeiras contendo apenas as 3 primeiras músicas da playlist original.

// Desafio Final: Organizando uma Fila de Atendimento
// Este desafio combina vários conceitos.
// Você está gerenciando a fila de atendimento de uma loja:
// fila = ["Cliente A", "Cliente B", "Cliente C", "Cliente D", "Cliente E"]
// Tarefas:
// O "Cliente C" se cansou de esperar e foi embora. Remova-o da fila. (Dica: primeiro ache o índice dele).
// O "Cliente F" acabou de chegar e entrou no final da fila. Adicione-o.
// O atendimento foi rápido e os dois primeiros clientes ("Cliente A" e "Cliente B") foram atendidos. Remova os dois primeiros da fila
// Exiba a fila final para saber quem são os próximos a serem atendidos.


