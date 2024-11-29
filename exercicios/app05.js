/*
Nome      : app05.js
Finalidade: JavaScript: conhecendo objetos
Observação: 05 Manipulando listas de objetos
Data      : 23/11/2024
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
//  console.clear();
}  

function ok() {
  console.log("ok");  
}  

function pula() {
  console.log("");  
}  

console.log("Lista de exercícios\n");
pare();

// #1
console.log("1 - Crie um array de objetos JavaScript representando informações de livros. Cada objeto deve conter pelo menos as seguintes propriedades: \n".cyan);
console.log("id (number): identificador do livro. titulo (string): título do livro. autor (string): nome do autor. anoPublicacao (number): ano de publicação do livro.\n".cyan);
const biblioteca = [
    {id: 1, titulo: 'O Senhor dos Aneis', autor: 'J.R.R Tolkien', anoPublicacao: 1954},
    {id: 2, titulo: 'Dom Quixote', autor: 'Miguel de Cervantes', anoPublicacao: 1605},
    {id: 3, titulo: '1984', autor: 'George Orwell', anoPublicacao: 1949}
];
console.log(biblioteca);
console.log("a) Crie uma função chamada encontrarLivroPorId que receba o id de um livro como parâmetro e retorne o objeto do livro correspondente. Se nenhum livro for encontrado, a função deve retornar null.\n".cyan);
function acharPorId(id){
    const livro = biblioteca.find(livro => livro.id === id)
    return livro || null;
}
console.log("ok\n");

console.log("b) Utilize a função para encontrar um livro com um id existente e imprima no console as informações do livro encontrado. Em seguida, utilize a função para encontrar um livro com um id inexistente e imprima no console uma mensagem indicando que o livro não foi encontrado.\n".cyan);

function validaConsulta(livro) {
  if(livro){
      console.log("Aqui esta o exemplar");
      console.log(livro)
      console.log(". Divirta-se lendo!");
  } else{
      console.error("nao achamos :(")
  }
}

let oTalDoId = Number(read.question("Informe um numero de id valido: "));
let livroAchado = acharPorId(oTalDoId);
validaConsulta(livroAchado);

pare();
oTalDoId = Number(read.question("Informe um numero de id invalido: "));
livroAchado = acharPorId(oTalDoId);
validaConsulta(livroAchado);

pare();

// #2
console.log("2 - Crie um array de objetos JavaScript representando informações de filmes. Cada objeto deve conter pelo menos as seguintes propriedades:\n".cyan);  
console.log("id (number): identificador do filme.\n titulo (string): título do filme.\n diretor (string): nome do diretor.\n anoLancamento (number): ano de lançamento do filme.\n".cyan); 
const catalogoFilmes = [
    { id: 1, titulo: 'Matrix', diretor: 'Lana Wachowski', anoLancamento: 1999 }, 
    { id: 2, titulo: 'Jurassic Park', diretor: 'Steven Spielberg', anoLancamento: 1993 }, 
    { id: 3, titulo: 'Inception', diretor: 'Christopher Nolan', anoLancamento: 2010 },
    { id: 4, titulo: 'A. Spider-Man', diretor: 'Mark Webb', anoLancamento: 2012},
    { id: 5, titulo: 'Vingadores', diretor: 'Anthony Russo e Joe Russo', anoLancamento: 2012}
];
console.log(catalogoFilmes);

console.log("Crie uma função chamada filtrarFilmesPorAno que receba um ano como parâmetro e retorne um novo array contendo apenas os filmes lançados nesse ano.\n".cyan); 
function filtrarFilmesPorAno(ano){
        return catalogoFilmes.filter(filme => filme.anoLancamento === ano);
}
console.log("ok\n");

console.log("Utilize a função para filtrar os filmes lançados em um ano específico e imprima no console o array resultante. Em seguida, refaça a operação com outro ano. Exemplo const catalogoFilmes = [{ id: 1, titulo: 'Matrix', diretor: 'Lana Wachowski', anoLancamento: 1999 }, { id: 2, titulo: 'Jurassic Park', diretor: 'Steven Spielberg', anoLancamento: 1993 }, { id: 3, titulo: 'Inception', diretor: 'Christopher Nolan', anoLancamento: 2010 }]\n".cyan);

let anoDoFilme = Number(read.question("Informe o ano do filme: "))

const filmesAno = filtrarFilmesPorAno(anoDoFilme);
console.log(filmesAno);
pare();
// #3
console.log("3 - Crie um array de objetos JavaScript representando informações fictícias de produtos. Cada objeto deve conter pelo menos as seguintes propriedades:\n".cyan); 
console.log("id (number): identificador do produto. nome (string): nome do produto. preco (number): preço do produto.\n".cyan);
const listaProdutos = [
  { id: 1, nome: 'Camiseta', preco: 25.99 }, 
  { id: 2, nome: 'Calça Jeans', preco: 49.99 }, 
  { id: 3, nome: 'Tênis', preco: 79.99 }, 
  { id: 4, nome: 'Boné', preco: 25.99 }
];
console.log(listaProdutos);

console.log("Crie uma função chamada filtrarOrdenarProdutosPorPreco que recebe um valor máximo (maxPreco) como parâmetro e retorna um novo array contendo apenas os produtos cujo preço é menor ou igual ao valor máximo, ordenados em ordem crescente de preço.\n".cyan);
function filtrarOrdenarProdutosPorPreco(maxPreco){
  return listaProdutos.filter(preco => preco.preco <= maxPreco);
}
console.log("ok\n");

console.log("Utilize a função para filtrar e ordenar os produtos com um valor máximo específico e imprima no console o array resultante. Exemplo const listaProdutos = [{ id: 1, nome: 'Camiseta', preco: 25.99 }, { id: 2, nome: 'Calça Jeans', preco: 49.99 }, { id: 3, nome: 'Tênis', preco: 79.99 }, { id: 4, nome: 'Boné', preco: 15.99 }]\n".cyan);

let quantoVoceTem = Number(read.question("Quanto voce tem?: "))

const resultado = filtrarOrdenarProdutosPorPreco(quantoVoceTem);
console.log("Temos estas opçoes: ");
console.log(resultado);

pare();


// #4
console.log("4 - Crie um array de objetos JavaScript representando informações de animais. Cada objeto deve conter pelo menos as seguintes propriedades:\n".cyan);
console.log("id (number): identificador do animal. nome (string): nome do animal. especie (string): espécie do animal. idade (number): idade do animal.\n".cyan);
const animais = [
  { id: 1, nome: 'Leão', especie: 'Felino', idade: 5 },
  { id: 2, nome: 'Elefante', especie: 'Mamífero', idade: 10 },
  { id: 3, nome: 'Pinguim', especie: 'Ave', idade: 3 },
];
console.log(animais);

console.log("Crie uma função chamada ordenarAnimais que receba como parâmetro uma função de comparação para realizar a ordenação do array.\n".cyan); 
function ordenarAnimais(comparacao) {
  return animais.sort(comparacao);
}
console.log("ok\n");

console.log("Você pode criar funções para fazer a ordenação crescente ou decrescente: Exemplos const animais = [{ id: 1, nome: 'Leão', especie: 'Felino', idade: 5 }, { id: 2, nome: 'Elefante', especie: 'Mamífero', idade: 10 }, { id: 3, nome: 'Pinguim', especie: 'Ave', idade: 3 }] function ordenarAnimais(comparacao) {return animais.sort(comparacao);} function compararIdadeCrescente(a, b) {implementação} function compararIdadeDecrescente(a, b) { implementação}\n".cyan);

function compararIdadeCrescente(a, b) {
  return a.idade - b.idade;
}

function compararIdadeDecrescente(a, b) {
  return b.idade - a.idade;
}
console.log("ok\n");

console.log('Animais em ordem crescente de idade:', ordenarAnimais(compararIdadeCrescente));
pula();
pula();
console.log('Animais em ordem decrescente de idade:', ordenarAnimais(compararIdadeDecrescente));
pare();


// #5
console.log("5 - Crie um array de objetos JavaScript representando informações fictícias de departamentos. Cada objeto deve conter pelo menos as seguintes propriedades:\n".cyan); 
console.log("id (number): identificador do departamento. nome (string): nome do departamento. funcionarios (array): array de objetos representando funcionários do departamento.\n".cyan); 
const departamentos = [
  {
      id: 1,
      nome: "Vendas",
      funcionarios: [
          { id: 101, nome: "Ana", cargo: "Vendedor" },
          { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
      ]
  },
  {
      id: 2,
      nome: "TI",
      funcionarios: [
          { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
          { id: 202, nome: "João", cargo: "Analista de sistemas" }
      ]
  }
];

console.log(JSON.stringify(departamentos[0]));
pula();
pula();
console.log(JSON.stringify(departamentos[1]));


console.log("Crie uma função chamada encontrarFuncionarioPorId que recebe o id de um funcionário e retorna o objeto do funcionário correspondente em qualquer departamento.\n".cyan);

function encontrarFuncionarioPorId(idFuncionario) {
  for (const departamento of departamentos) {
    for (const funcionario of departamento.funcionarios) {
      if (funcionario.id === idFuncionario) {
        return funcionario;
      }
    }
  }
  return null;
}
console.log("ok\n")

console.log("Utilize a função para encontrar um funcionário com um id existente e imprima no console as informações do funcionário encontrado. Em seguida, utilize a função para encontrar um funcionário com um id inexistente e imprima no console uma mensagem indicando que o funcionário não foi encontrado. Exemplo const departamentos = [{id: 1, nome: 'Vendas', funcionarios: [{ id: 101, nome: 'Ana', cargo: 'Vendedor' }, { id: 102, nome: 'Carlos', cargo: 'Gerente de vendas' }]}, {id: 2, nome: 'TI', funcionarios: [{ id: 201, nome: 'Maria', cargo: 'Desenvolvedor' }, { id: 202, nome: 'João', cargo: 'Analista de sistemas' }]}]\n".cyan);
function validaConsultaFuncionario(trabalhador) {
  if(trabalhador){
      console.log("Aqui esta o");
      console.log(trabalhador)
  } else{
      console.error("nao achamos :(")
  }
}
ok();

let vcEstaProcurandoQualFuncionario = Number(read.question("Informe um id de funcionario valido: "));
let funcionarioEncontrado = encontrarFuncionarioPorId(vcEstaProcurandoQualFuncionario);
validaConsultaFuncionario(funcionarioEncontrado);
pula();

vcEstaProcurandoQualFuncionario = Number(read.question("Informe um id de funcionario invalido: "));
funcionarioEncontrado = encontrarFuncionarioPorId(vcEstaProcurandoQualFuncionario);
validaConsultaFuncionario(funcionarioEncontrado);