/*
Nome      : app02.js
Finalidade: JavaScript: conhecendo objetos
Observação: 04 Conhecendo JSON
Data      : 19/11/2024
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

// 1 ###############################################################################################################
console.log("1 - Crie um arquivo chamado dados.json contendo informações fictícias em formato JSON. O arquivo pode representar, por exemplo, dados de produtos, usuários ou qualquer outra informação que você deseje. Crie um arquivo chamadoutilizarRequire.js e, dentro dele, utilize a função require() para importar o conteúdo do arquivo dados.json. Imprima no console o conteúdo importado utilizando a função console.log(). Acesse diferentes propriedades do objeto importado e imprima no console para verificar o acesso aos dados. Exemplo: { 'produtos': [ { 'id': 1,  'nome': 'Camiseta', 'preco': 25.99 }, { 'id': 2, 'nome': 'Calça Jeans', 'preco': 49.99 } ], 'usuarios': [ { 'id': 101, 'nome': 'João', 'email': 'joao@example.com' }, { 'id': 102, 'nome': 'Maria', 'email': 'maria@example.com' }]}\n".cyan);
const dados = require('./04dados.json');

console.log("Conteúdo completo do arquivo 'dados.json':", dados);

console.log("\nLista de produtos:");
dados.produtos.forEach(produto => {
  console.log(`- ID: ${produto.id}, Nome: ${produto.nome}, Preço: R$ ${produto.preco}`);
});

console.log("\nLista de usuários:");
dados.usuarios.forEach(usuario => {
  console.log(`- ID: ${usuario.id}, Nome: ${usuario.nome}, Email: ${usuario.email}`);
});
pare();

// 2 ###############################################################################################################
console.log("2 - Crie um objeto JavaScript representando informações de um produto. O objeto deve conter pelo menos as seguintes propriedades: id (number): identificador do produto. nome (string): nome do produto. preco (number): preço do produto. Converta o objeto produto para uma string utilizando JSON.stringify() e imprima no console a string resultante. Exemplo const produto = { id: 1, nome: 'Camiseta', preco: 25.99}\n".cyan);
const produto = {
  id:1, 
  nome: 'Camiseta',
  preco: 25.99
}

const produtoString = JSON.stringify(produto);
console.log(produtoString);
pare();

// 3 ###############################################################################################################
console.log("3 - Crie um arquivo chamado animais.json, contendo informações fictícias em formato JSON. O arquivo pode representar dados de animais, incluindo pelo menos três elementos no array. Crie um arquivo chamado manipulacaoJson.js. Dentro deste arquivo, realize as seguintes operações: a) Leia o conteúdo do arquivo animais.json. b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse(). c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat. d) Modifique o habitat de um animal existente no array de animais. e) Remova um animal do array de animais. f) Converta o objeto modificado para uma string JSON utilizando JSON.stringify(). g) Imprima no console o objeto JavaScript resultante das operações. Exemplo de animais.json: { 'animais': [{ 'id': 1, 'nome': 'Leão', 'tipo': 'Mamífero', 'habitat': 'Savana'}, { 'id': 2, 'nome': 'Pinguim', 'tipo': 'Ave', 'habitat': 'Pólo Sul' }, { 'id': 3, 'nome': 'Cobra', 'tipo': 'Réptil', 'habitat': 'Floresta Tropical' }]}\n".cyan);
const fs = require('fs');
const data = fs.readFileSync('04animais.json', 'utf8');
const jsonObj = JSON.parse(data);

const novoAnimal = {
  id: 4,
  nome: "Tubarão",
  tipo: "Peixe",
  habitat: "Oceano"
};
jsonObj.animais.push(novoAnimal);

for (let animal of jsonObj.animais) {
  if (animal.id === 3) {
    animal.habitat = "Deserto";
  }
}

jsonObj.animais = jsonObj.animais.filter(animal => animal.id !== 2);

const jsonString = JSON.stringify(jsonObj, null, 2);

fs.writeFileSync('animais.json', jsonString, 'utf8');

console.log('Objeto JavaScript atualizado:', jsonObj);

pare();

// 4 ###############################################################################################################
console.log("4 - Crie um objeto JavaScript representando informações de uma pessoa. O objeto deve conter as seguintes propriedades: id (number): identificador da pessoa. nome (string): nome da pessoa. idade (number): idade da pessoa Crie uma função que receba um objeto JavaScript e retorne um novo objeto. Utilize esta função para fazer uma cópia do objeto pessoaOriginal. Modifique a cópia do objeto obtido através da função, adicionando ou alterando pelo menos uma propriedade. Imprima no console ambos os objetos (o original e o modificado) para verificar que as alterações feitas no objeto modificado não afetaram o objeto original. Exemplo const pessoaOriginal = { id: 1, nome: 'Alice', idade: 30}\n".cyan);
const pessoaOriginal = {
  id: 110901,
  nome: 'Jalin Rabou',
  idade: 27
}

function copiarObj(obj){
  return{...obj};
}

const pessoaModificada = copiarObj(pessoaOriginal);
pessoaModificada.idade = 35
pessoaModificada.estado = 'pernambuco'

console.log('Pessoa original:', pessoaOriginal);
console.log('Pessoa modificada:', pessoaModificada);
pare();