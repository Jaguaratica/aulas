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

/*
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
*/

// Exercício 3: Playlist de Músicas
// Imagine que você tem uma playlist de músicas para uma viagem.
// playlist = ["Bohemian Rhapsody", "Hotel California", "Stairway to Heaven", "Imagine", "Like a Rolling Stone", "Smells Like Teen Spirit"]
// Tarefas:
// A viagem começou e você quer ouvir a partir de "Stairway to Heaven" até o final. Crie uma nova lista chamada viagemComecou que contenha essa parte da playlist.
// Você só tem tempo para ouvir as músicas que estão entre "Hotel California" e "Like a Rolling Stone" (incluindo as duas). Crie uma nova lista chamada trechoCurto com essa seleção.
// Crie uma terceira lista chamada asTresPrimeiras contendo apenas as 3 primeiras músicas da playlist original.

playlist = ["Bohemian Rhapsody", "Hotel California", "Stairway to Heaven", "Imagine", "Like a Rolling Stone", "Smells Like Teen Spirit"]

/*
let indiceInicial = playlist.indexOf("Stairway to Heaven");
let listaStairway = [];

for (let indice = indiceInicial;  indice < playlist.length; indice++){
    listaStairway.push(playlist[indice]);
}

console.log(listaStairway)
*/

let indiceInicial = playlist.indexOf("Stairway to Heaven");
let listaStairway = playlist.slice(indiceInicial);
console.log(listaStairway);

// Desafio Final: Organizando uma Fila de Atendimento
// Este desafio combina vários conceitos.
// Você está gerenciando a fila de atendimento de uma loja:
// fila = ["Cliente A", "Cliente B", "Cliente C", "Cliente D", "Cliente E"]
// Tarefas:
// O "Cliente C" se cansou de esperar e foi embora. Remova-o da fila. (Dica: primeiro ache o índice dele).
// O "Cliente F" acabou de chegar e entrou no final da fila. Adicione-o.
// O atendimento foi rápido e os dois primeiros clientes ("Cliente A" e "Cliente B") foram atendidos. Remova os dois primeiros da fila
// Exiba a fila final para saber quem são os próximos a serem atendidos.

// Nível 1: Acesso e Índices
// Exercício 1: Gerenciando Etapas de um Foguete
// Você está controlando a sequência de lançamento de um foguete. As etapas estão em um array:

// etapasLançamento = ["Verificação de sistemas", "Ignição do motor principal", "Lançamento", "Separação do foguete auxiliar", "Entrada em órbita"]

// Tarefas:

// Qual é a primeira etapa do lançamento (a que está no índice 0)? Exiba-a.

// A etapa de "Lançamento" é crucial. Qual é o índice dela?

// Exiba a última etapa da sequência usando o comprimento do array para encontrá-la (Dica: o índice do último item é sempre tamanho - 1).

// Nível 2: Busca e Modificação
// Exercício 2: Controle de Estoque
// Você tem um array que representa as prateleiras de um pequeno estoque.

// estoque = ["Parafusos", "Porcas", "Arruelas", "Pregos", "Buchas"]

// Tarefas:

// Um cliente comprou todas as "Arruelas". Para não deixar a prateleira vazia, você quer colocar "Brocas" no lugar. Modifique o array para que "Brocas" substitua "Arruelas".

// Você percebeu que "Pregos" está acabando e precisa ser removido da lista de itens disponíveis. Remova "Pregos" do array. (Dica: primeiro encontre o índice, depois use um método para remover).

// Chegou uma nova mercadoria: "Fita Isolante". Adicione-a ao final do seu estoque.

// Mostre o array estoque final.

// Nível 3: Fatiamento (Slicing)
// Exercício 3: Análise de Temperaturas
// Um sensor registrou as temperaturas (em Celsius) ao longo de uma semana e as armazenou em um array.

// temperaturasSemana = [22, 24, 25, 27, 28, 26, 23]
// // (índice 0 = Domingo, 1 = Segunda, ..., 6 = Sábado)

// Tarefas:

// O período de trabalho vai de Segunda a Sexta. Crie um novo array chamado diasUteis contendo apenas as temperaturas desses dias.

// O fim de semana (Sábado e Domingo) teve temperaturas mais amenas. Crie um array chamado fimDeSemana que contenha a temperatura de Domingo e a de Sábado. (Atenção: eles não estão juntos no array!).

// O pico de calor ocorreu entre Terça e Quinta. Crie um array picoCalor com as temperaturas registradas nesses três dias.

// Desafio Final: Gerenciando uma Corrida
// Você está monitorando os corredores em uma maratona.

// corredores = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo", "Fernanda"]

// Tarefas:

// No meio da corrida, Carlos se sentiu mal e precisou abandonar. Remova-o da lista.

// Logo em seguida, os três primeiros colocados (Ana, Bruno e Diana) se destacaram do resto do grupo. Crie um novo array chamado pelotaoDaFrente apenas com eles.

// Eduardo conseguiu um fôlego extra e ultrapassou Diana. Na lista original de corredores (já sem o Carlos), troque as posições de "Eduardo" e "Diana".

// Mostre a lista final de corredores na sua nova ordem e também o pelotaoDaFrente.