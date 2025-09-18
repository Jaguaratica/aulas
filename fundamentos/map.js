// Enquanto um laço for é uma ferramenta genérica que pode fazer tudo, 
// essas são ferramentas de precisão.

// .map(): Para transformar cada item de um array em algo novo
const candidatos = [
    { nome: 'Ana Silva', idade: 28, vaga: 'Frontend', senioridade: 'Pleno', tecnologias: ['React', 'CSS', 'JavaScript'] },
    { nome: 'Bruno Costa', idade: 35, vaga: 'Backend', senioridade: 'Sênior', tecnologias: ['Python', 'Django', 'PostgreSQL'] },
    { nome: 'Carla Dias', idade: 23, vaga: 'Frontend', senioridade: 'Júnior', tecnologias: ['Vue', 'CSS', 'JavaScript'] },
    { nome: 'Daniel Faria', idade: 31, vaga: 'Fullstack', senioridade: 'Pleno', tecnologias: ['React', 'Node.js', 'TypeScript'] },
    { nome: 'Elena Moraes', idade: 29, vaga: 'Backend', senioridade: 'Pleno', tecnologias: ['Python', 'Flask', 'MongoDB'] }
];
let candidatosFiltrados = []
candidatos.forEach((candidato) => {
  candidatosFiltrados.push(candidato.nome, candidato.senioridade)
});

console.log(candidatosFiltrados)

const candidatosSenioridade = candidatos.map(candidato => {

})
// const nomes = [];
// candidatos.forEach((candidato, index) => 
//   nomes.push(candidato.nome + " " +index)
// );
// console.log(nomes);

// O método .map() percorre cada elemento de um array, executa uma função de callback nesse elemento 
// e retorna um novo array com os resultados, mantendo o array original intacto.

