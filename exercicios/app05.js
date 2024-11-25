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
  console.clear();
}  

function ok() {
  console.log("ok");  
}  

function pula() {
  console.log("");  
}  

console.log("Lista de exercícios\n");
pare();

console.log("1 - Crie um array de objetos JavaScript representando informações de livros. Cada objeto deve conter pelo menos as seguintes propriedades: id (number): identificador do livro. titulo (string): título do livro. autor (string): nome do autor. anoPublicacao (number): ano de publicação do livro. Crie uma função chamada encontrarLivroPorId que receba o id de um livro como parâmetro e retorne o objeto do livro correspondente. Se nenhum livro for encontrado, a função deve retornar null. Utilize a função para encontrar um livro com um id existente e imprima no console as informações do livro encontrado. Em seguida, utilize a função para encontrar um livro com um id inexistente e imprima no console uma mensagem indicando que o livro não foi encontrado. Exemplo: const biblioteca = [{ id: 1, titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien',  anoPublicacao: 1954 }, { id: 2, titulo: 'Dom Quixote', autor: 'Miguel de Cervantes', anoPublicacao: 1605 }, { id: 3, titulo: '1984', autor: 'George Orwell', anoPublicacao: 1949 }]\n".cyan);
const biblioteca = [
    {id: 1, titulo: 'O Senhor dos Aneis', autor: 'J.R.R Tolkien', anoPublicacao: 1954},
    {id: 2, titulo: 'Dom Quixote', autor: 'Miguel de Cervantes', anoPublicacao: 1605},
    {id: 3, titulo: '1984', autor: 'George Orwell', anoPublicacao: 1949}
];

function acharPorId(id){
    const livro = biblioteca.find(livro => livro.id === id)
    return livro || null;
}
const livroAchado = acharPorId(1);
if(livroAchado){
    console.log("Aqui esta o exemplar", livroAchado.titulo,". Divirta-se lendo!");
} else{
    console.error("nao achamos :(")
}
pare();

console.log("2 - Crie um array de objetos JavaScript representando informações de filmes. Cada objeto deve conter pelo menos as seguintes propriedades:  id (number): identificador do filme. titulo (string): título do filme. diretor (string): nome do diretor. anoLancamento (number): ano de lançamento do filme. Crie uma função chamada filtrarFilmesPorAno que receba um ano como parâmetro e retorne um novo array contendo apenas os filmes lançados nesse ano. Utilize a função para filtrar os filmes lançados em um ano específico e imprima no console o array resultante. Em seguida, refaça a operação com outro ano. Exemplo const catalogoFilmes = [{ id: 1, titulo: 'Matrix', diretor: 'Lana Wachowski', anoLancamento: 1999 }, { id: 2, titulo: 'Jurassic Park', diretor: 'Steven Spielberg', anoLancamento: 1993 }, { id: 3, titulo: 'Inception', diretor: 'Christopher Nolan', anoLancamento: 2010 }]\n".cyan);
const catalogoFilmes = [
    { id: 1, titulo: 'Matrix', diretor: 'Lana Wachowski', anoLancamento: 1999 }, 
    { id: 2, titulo: 'Jurassic Park', diretor: 'Steven Spielberg', anoLancamento: 1993 }, 
    { id: 3, titulo: 'Inception', diretor: 'Christopher Nolan', anoLancamento: 2010 },
    { id: 4, titulo: 'A. Spider-Man', diretor: 'Mark Webb', anoLancamento: 2012},
    { id: 5, titulo: 'Vingadores', diretor: 'Anthony Russo e Joe Russo', anoLancamento: 2012}
];

function filtrarFilmesPorAno(ano){
        return catalogoFilmes.filter(filme => filme.anoLancamento === ano);
}

const filmesAno = filtrarFilmesPorAno(2012);
console.log(filmesAno);
pare();

console.log("3 - Crie um array de objetos JavaScript representando informações fictícias de produtos. Cada objeto deve conter pelo menos as seguintes propriedades: id (number): identificador do produto. nome (string): nome do produto. preco (number): preço do produto. Crie uma função chamada filtrarOrdenarProdutosPorPreco que recebe um valor máximo (maxPreco) como parâmetro e retorna um novo array contendo apenas os produtos cujo preço é menor ou igual ao valor máximo, ordenados em ordem crescente de preço. Utilize a função para filtrar e ordenar os produtos com um valor máximo específico e imprima no console o array resultante. Exemplo const listaProdutos = [{ id: 1, nome: 'Camiseta', preco: 25.99 }, { id: 2, nome: 'Calça Jeans', preco: 49.99 }, { id: 3, nome: 'Tênis', preco: 79.99 }, { id: 4, nome: 'Boné', preco: 15.99 }]\n".cyan);
const listaProdutos = [
    { id: 1, nome: 'Camiseta', preco: 25.99 }, 
    { id: 2, nome: 'Calça Jeans', preco: 49.99 }, 
    { id: 3, nome: 'Tênis', preco: 79.99 }, 
    { id: 4, nome: 'Boné', preco: 25.99 }
];

function filtrarOrdenarProdutosPorPreco(maxPreco){
  return listaProdutos.filter(preco => preco.preco === maxPreco);
}

const precoMaximo = filtrarOrdenarProdutosPorPreco(49.99);
console.log(precoMaximo);

pare();

console.log("4 - Crie um array de objetos JavaScript representando informações de animais. Cada objeto deve conter pelo menos as seguintes propriedades:  id (number): identificador do animal. nome (string): nome do animal. especie (string): espécie do animal. idade (number): idade do animal.  Crie uma função chamada ordenarAnimais que receba como parâmetro uma função de comparação para realizar a ordenação do array. Você pode criar funções para fazer a ordenação crescente ou decrescente: Exemplos const animais = [{ id: 1, nome: 'Leão', especie: 'Felino', idade: 5 }, { id: 2, nome: 'Elefante', especie: 'Mamífero', idade: 10 }, { id: 3, nome: 'Pinguim', especie: 'Ave', idade: 3 }] function ordenarAnimais(comparacao) {return animais.sort(comparacao);} function compararIdadeCrescente(a, b) {implementação} function compararIdadeDecrescente(a, b) { implementação}\n".cyan);
const animais = [
  { id: 1, nome: 'Leão', especie: 'Felino', idade: 5 },
  { id: 2, nome: 'Elefante', especie: 'Mamífero', idade: 10 },
  { id: 3, nome: 'Pinguim', especie: 'Ave', idade: 3 },
];

function ordenarAnimais(comparacao) {
  return animais.sort(comparacao);
}

function compararIdadeCrescente(a, b) {
  return a.idade - b.idade;
}

function compararIdadeDecrescente(a, b) {
  return b.idade - a.idade;
}

console.log('Animais em decrescente:', ordenarAnimais(compararIdadeCrescente));

console.log('Animais em decrescente:', ordenarAnimais(compararIdadeDecrescente));
pare();

console.log("5 - Crie um array de objetos JavaScript representando informações fictícias de departamentos. Cada objeto deve conter pelo menos as seguintes propriedades: id (number): identificador do departamento. nome (string): nome do departamento. funcionarios (array): array de objetos representando funcionários do departamento. Crie uma função chamada encontrarFuncionarioPorId que recebe o id de um funcionário e retorna o objeto do funcionário correspondente em qualquer departamento. Utilize a função para encontrar um funcionário com um id existente e imprima no console as informações do funcionário encontrado. Em seguida, utilize a função para encontrar um funcionário com um id inexistente e imprima no console uma mensagem indicando que o funcionário não foi encontrado. Exemplo const departamentos = [{id: 1, nome: 'Vendas',        funcionarios: [{ id: 101, nome: 'Ana', cargo: 'Vendedor' }, { id: 102, nome: 'Carlos', cargo: 'Gerente de vendas' }]}, {id: 2, nome: 'TI',     funcionarios: [{ id: 201, nome: 'Maria', cargo: 'Desenvolvedor' }, { id: 202, nome: 'João', cargo: 'Analista de sistemas' }]}]\n".cyan);
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

const funcionarioEncontrado = encontrarFuncionarioPorId(101);
if (funcionarioEncontrado) {
  console.log('Funcionário encontrado:', funcionarioEncontrado);
} else {
  console.log('Funcionário não encontrado.');
}