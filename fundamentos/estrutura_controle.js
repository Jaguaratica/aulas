const nome = "Eva"
const idade = 42

// if(nome === "Juliana"){
//     console.log("Meu nome é Juliana")
// } 

// else if(nome === "Eva"){
//     console.log("Meu nome é Eva");

// }else{
//     console.log("Nome não encontrado")
// }

if(nome === "Juliana" || nome === "Eva" && idade=== 40){
    console.log(`Meu nome é ${nome}`)
} else{
    console.log("Nome não encontrado")
}


new Date();
new Date(valor);
new Date(dataString);
new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);

console.log(dataEspecifica)
let nomeDoDia;

switch (diaDaSemana) {
  case 0:
    nomeDoDia = "Domingo";
    break;
  case 1:
    nomeDoDia = "Segunda-feira";
    break;
  case 2:
    nomeDoDia = "Terça-feira";
    break;
  case 3:
    nomeDoDia = "Quarta-feira";
    break;
  case 4:
    nomeDoDia = "Quinta-feira";
    break;
  case 5:
    nomeDoDia = "Sexta-feira";
    break;
  case 6:
    nomeDoDia = "Sábado";
    break;
  default:
    nomeDoDia = "Dia inválido";
}

console.log("Hoje é " + nomeDoDia); // Exibe o dia da semana atual