/*
Nome      : app04.js
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
console.log("1 - Crie um arquivo chamado dados.json contendo informações fictícias em formato JSON. O arquivo pode representar, por exemplo, dados de produtos, usuários ou qualquer outra informação que você deseje.\n".cyan);

ok();

console.log("Crie um arquivo chamadoutilizarRequire.js e, dentro dele, utilize a função require() para importar o conteúdo do arquivo dados.json.\n".cyan);

const dados = require('./04dados.json');
ok();

console.log("Imprima no console o conteúdo importado utilizando a função console.log(). Acesse diferentes propriedades do objeto importado e imprima no console para verificar o acesso aos dados. Exemplo: { 'produtos': [ { 'id': 1,  'nome': 'Camiseta', 'preco': 25.99 }, { 'id': 2, 'nome': 'Calça Jeans', 'preco': 49.99 } ], 'usuarios': [ { 'id': 101, 'nome': 'João', 'email': 'joao@example.com' }, { 'id': 102, 'nome': 'Maria', 'email': 'maria@example.com' }]}\n".cyan);

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
console.log("2 - Crie um objeto JavaScript representando informações de um produto. O objeto deve conter pelo menos as seguintes propriedades:\n".cyan); 
console.log("id (number): identificador do produto.\n nome (string): nome do produto.\n preco (number): preço do produto.\n".cyan); 

const produto = {
  id:1, 
  nome: 'Camiseta',
  preco: 25.99
}
console.log(produto);

console.log("Converta o objeto produto para uma string utilizando JSON.stringify() e imprima no console a string resultante. Exemplo const produto = { id: 1, nome: 'Camiseta', preco: 25.99}\n".cyan);

const produtoString = JSON.stringify(produto);
console.log(produtoString);
pare();

// 3 ###############################################################################################################
console.log("3 - Crie um arquivo chamado animais.json, contendo informações fictícias em formato JSON. O arquivo pode representar dados de animais, incluindo pelo menos três elementos no array.\n".cyan); 

ok();

console.log("Crie um arquivo chamado manipulacaoJson.js.\n".cyan); 
console.log("Dentro deste arquivo, realize as seguintes operações:\n".cyan); 

console.log("a) Leia o conteúdo do arquivo animais.json.\n b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().\n c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat.\n d) Modifique o habitat de um animal existente no array de animais.\n e) Remova um animal do array de animais.\n f) Converta o objeto modificado para uma string JSON utilizando JSON.stringify().\n g) Imprima no console o objeto JavaScript resultante das operações.\n Exemplo de animais.json: { 'animais': [{ 'id': 1, 'nome': 'Leão', 'tipo': 'Mamífero', 'habitat': 'Savana'}, { 'id': 2, 'nome': 'Pinguim', 'tipo': 'Ave', 'habitat': 'Pólo Sul' }, { 'id': 3, 'nome': 'Cobra', 'tipo': 'Réptil', 'habitat': 'Floresta Tropical' }]}\n".cyan);
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
console.log("4 - Crie um objeto JavaScript representando informações de uma pessoa. O objeto deve conter as seguintes propriedades:\n".cyan); console.log("id (number): identificador da pessoa.\n nome (string): nome da pessoa.\n idade (number): idade da pessoa\n".cyan);

const pessoaOriginal = {
  id: 110901,
  nome: 'Jalin Rabou',
  idade: 27
}
console.log(pessoaOriginal);

console.log("Crie uma função que receba um objeto JavaScript e retorne um novo objeto.\n".cyan);

function copiarObj(obj){
  return{...obj};
}
ok();

console.log("Utilize esta função para fazer uma cópia do objeto pessoaOriginal. Modifique a cópia do objeto obtido através da função, adicionando ou alterando pelo menos uma propriedade.\n".cyan); 

const pessoaModificada = copiarObj(pessoaOriginal);
pessoaModificada.idade = 35
pessoaModificada.estado = 'pernambuco'
ok();

console.log("Imprima no console ambos os objetos (o original e o modificado) para verificar que as alterações feitas no objeto modificado não afetaram o objeto original. Exemplo const pessoaOriginal = { id: 1, nome: 'Alice', idade: 30}\n".cyan);


console.log('Pessoa original:', pessoaOriginal);
console.log('Pessoa modificada:', pessoaModificada);
pare();