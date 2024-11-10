/*
Nome      : app01.js
Finalidade: JavaScript: conhecendo objetos
Observação: 01 O que são objetos
Data      : 01/11/2024
*/

const read = require ('readline-sync');
const color = require('@colors/colors');
console.clear();

function pare(){
  console.log();  
  const ordem = Number(read.question("Pressione a tecla <enter> para continuar... ou 9 + <enter> para parar: ")).toFixed(0);
  if(ordem==9){
    console.log('End-of-Job'.green);  
    process.exit();
  }   
  console.clear();
}  

function ok() {
  console.log("ok");  
}  

function pula() {
  console.log("");  
}  

console.log("Lista de exercícios");

// 1 #####################################################################################################################################
console.log("1 - Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. O objeto deve conter as seguintes propriedades: titulo (string): título do livro. autor (string): nome do autor do livro. anoPublicacao (number): ano de publicação do livro. genero (string): gênero do livro. No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console.\n".cyan);
const livroObj = {
    titulo: 'As Tranças do Rei Careca',
    nomeDoAutor: 'Negro Preconceituoso',
    anoDePublicacao: '03/24/2024',
    genero: 'Inspirador'
}

console.log(livroObj.titulo);
console.log(livroObj.nomeDoAutor);
console.log(livroObj.anoDePublicacao);
console.log(livroObj.genero);
pare();

// 2 #####################################################################################################################################
console.log("2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero. Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual. Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação. Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.\n".cyan);

const anoAtual = new Date().getFullYear();

const livro = {
    titulo: 'As Tranças do Rei Careca',
    autor: 'Negro Preconceituoso',
    anoDePublicacao: 2021,
    genero: 'Inspirador'
};

livro.idadePublicacao = anoAtual - livro.anoDePublicacao;
const mostrarDetalhes = `Título: ${livro.titulo}\nAutor: ${livro.autor}\nAno de Publicação: ${livro.anoDePublicacao}\nGênero: ${livro.genero}\nIdade de Publicação: ${livro.idadePublicacao} anos`;
console.log(mostrarDetalhes);
pare();

// 3 #####################################################################################################################################
console.log("3 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.\n".cyan);
const livro2 = {
  titulo: 'O Grito Dos Que Não Falam e O Andar Dos Aleijados',
  autor: 'Negro Preconceituoso',
  anoDePublicacao: '10/31/2024',
  idadePublicacao: 2024,
  genero: 'Inspirador'
}

console.log("Título:", livro2['titulo']);
console.log("Autor:", livro2['autor']);
console.log("Ano de publicacao:", livro2['anoDePublicacao']);
console.log("Idade de publicacao:", livro2['idadePublicacao']);
console.log("Genero:", livro2['genero']);
pare();

// 4 #####################################################################################################################################
console.log("4 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null. No final do arquivo livro.js, adicione uma avaliação ao objeto. Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro. Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.\n".cyan);
const livro3 = {
  titulo: 'O Falar Dos Culpados',
  autor: 'Negro Preconceituoso',
  anoDePublicacao: '1/27/2013',
  idadePublicacao: 2013,
  genero: 'Misterio',
  avaliacao: null
}

console.log("Título:", livro3['titulo']);
console.log("Autor:", livro3['autor']);
console.log("Ano de publicacao:", livro3['anoDePublicacao']);
console.log("Idade de publicacao:", livro3['idadePublicacao']);
console.log("Genero:", livro3['genero']);
console.log("Avaliacao:", livro3['avaliacao']);

livro3.avaliacao = "Livro dos sonhos 77/10"

console.log("Avaliacao:", livro3['avaliacao']);
pare();

// 5 #####################################################################################################################################
console.log("5 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois altere o gênero do livro para 'Aventura'.\n".cyan);
const livro4 = {
  titulo: 'O Senhor dos Pasteis',
  autor: 'Xitãozinho Chororó',
  anoDePublicacao: '1/27/2018',
  idadePublicacao: 2018,
  genero: 'Aventura',
  avaliacao: '10/10'
}

console.log(livro4);
pare();

// 6 #####################################################################################################################################
console.log("6 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.\n".cyan);
const livro5 = {
  titulo: 'Ele é Culpado',
  autor: 'Capitão Pátria',
  anoDePublicacao: '1/27/2020',
  idadePublicacao: 2020,
  avaliacao: '9/10'
}

delete livro5.avaliacao

console.log(livro5);