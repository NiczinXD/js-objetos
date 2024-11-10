/*
Nome      : app02.js
Finalidade: JavaScript: conhecendo objetos
Observação: 02 Manipulando objetos
Data      : 06/11/2024
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

// 1 #####################################################################################################################
console.log("1 - Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente informações sobre uma pessoa. Este objeto deve ter as seguintes propriedades: nome (string): Nome da pessoa. idade (number): Idade da pessoa. solteiro (boolean): Indicador de estado civil (true se solteiro, false se casado). hobbies (array): Lista de hobbies da pessoa. Adicione valores a cada propriedade do objeto pessoa. Use valores fictícios para simular uma pessoa específica. Crie uma função chamada mostrarInfoPessoa que aceite o objeto pessoa como parâmetro e imprima todas as informações da pessoa no console, incluindo o tipo de dado de cada propriedade. No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa passando o objeto pessoa como argumento. Dica: você pode usar um método de array para retirar os elementos dos colchetes e exibi-los como texto.\n".cyan);
const infoPessoa = {
  nome: 'Julio Do Cocorico',
  idade: 10,
  solteiro: true,
  hobbies: ['Cuidar e brincar com as galinhas', 'Fazer 1kg de pó']
}

function mostrarInfoPessoa(obj) {
  console.log(obj);
}

mostrarInfoPessoa(infoPessoa);
pare();

// 2 #####################################################################################################################
console.log("2 - Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades: rua (string): nome da rua. cidade (string): nome da cidade. estado (string): nome do estado. Preencha as subpropriedades do objeto endereco com valores fictícios. Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada. No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, incluindo o endereço, são exibidas corretamente no console.\n".cyan);
infoPessoa.endereco = {
  rua: "Fazenda Show De Bolas",
  cidade: "Xique-Xique",
  estado: "Bahia"
}

function mostrarInfoPessoa(obj) {
  console.log(obj);
}

mostrarInfoPessoa(infoPessoa);

pare();

// 3 #####################################################################################################################
console.log("3 - Crie uma lista de pessoas chamada pessoas que será um array contendo objetos. Cada objeto deve representar uma pessoa e conter as seguintes propriedades: nome (string): nome da pessoa. idade (number): idade da pessoa. cidade (string): cidade de residência da pessoa.  Adicione pelo menos três objetos à lista pessoas com informações fictícias de diferentes pessoas. a) Crie uma função chamada mostrarListaPessoas que aceita a lista pessoas como parâmetro e imprima no console as informações de cada pessoa na lista. b) Adicione uma nova pessoa à lista pessoas utilizando o método push. Certifique-se de que a nova pessoa tenha informações distintas das pessoas já existentes na lista. c) Chame a função mostrarListaPessoas para verificar se as informações, incluindo a nova pessoa, são exibidas corretamente no console. d) Crie uma função chamada filtrarPorCidade que aceita a lista pessoas e uma string cidade como parâmetros. A função deve retornar uma nova lista contendo apenas as pessoas que residem na cidade fornecida. Chame a função filtrarPorCidade passando a lista pessoas e uma cidade fictícia como argumentos e imprima no console o resultado obtido.\n".cyan);
const pessoas = [
  { nome: "Joaozinho", idade: 28, cidade: "São Paulo" },
  { nome: "Aninha", idade: 34, cidade: "Xique-Xique" },
  { nome: "João Souza", idade: 22, cidade: "São Paulo" }
];

function mostrarListaPessoas(lista) {
  lista.forEach((pessoa) => {
      console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
  });
}

pessoas.push({ nome: "Ana Costa", idade: 30, cidade: "Curitiba" });

mostrarListaPessoas(pessoas);

function filtrarPorCidade(lista, cidade) {
  return lista.filter((pessoa) => pessoa.cidade === cidade);
}

const pessoasDeSaoPaulo = filtrarPorCidade(pessoas, "São Paulo");
console.log("Pessoas de São Paulo:");
mostrarListaPessoas(pessoasDeSaoPaulo);
pare();

// 4 #####################################################################################################################
console.log("4 - Crie um objeto chamado calculadora que terá os seguintes métodos: soma: uma função que aceita dois parâmetros e retorna a soma deles. subtracao: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro. multiplicacao: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles. divisao: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo. Certifique-se de tratar a divisão por zero, retornando uma mensagem apropriada nesse caso. a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os resultados obtidos. b) Adicione um novo método chamado calcularMedia ao objeto calculadora. Esta função deve aceitar um array de números como parâmetro e retornar a média aritmética dos valores. c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido.\n".cyan);
const calculadora = {
  soma: function(numero1, numero2){
    console.log(numero1 + numero2);
  },
  subtracao: function(numero1, numero2){
    console.log(numero1 - numero2);
  },
  multiplicacao: function(numero1, numero2){
    console.log(numero1 * numero2);
  },
  divisao: function(numero1, numero2){
    if(numero2 === 0){
      console.log("para de brincadeirinha seu idiota");
    }
    console.log(numero1 / numero2);
  },
  calcularMedia: function(numeros){
    let soma = 0;
    for(numero of numeros){
      soma += numero;
    }
    console.log(soma);

    let media = soma / numeros.length;
    console.log(media);
  }
}

console.log("Soma:", calculadora.soma(10, 18));
console.log("Subtracao:", calculadora.subtracao(18, 5));
console.log("Multiplicacao", calculadora.multiplicacao(7, 10));
console.log("Divisao", calculadora.divisao(100, 5));
console.log(calculadora.divisao(100, 0));

const array = [1, 2, 3, 4, 5]
console.log(calculadora.calcularMedia(array));
pare()

// estaAprovado: function(mediaBase){
//   return this.media >= mediaBase ? true : false
// }
// 5 #####################################################################################################################
console.log("5 - Crie um objeto chamado contaBancaria com as seguintes propriedades: titular: uma string representando o titular da conta. saldo: um número representando o saldo da conta. depositar: uma função que aceita um valor como parâmetro e adiciona esse valor ao saldo da conta. Utilize this para acessar a propriedade saldo. sacar: uma função que aceita um valor como parâmetro e subtrai esse valor do saldo da conta. Utilize this para acessar a propriedade saldo. Certifique-se de verificar se há saldo suficiente antes de efetuar o saque. Crie um objeto chamado cliente que representa um cliente com uma conta bancária. O objeto deve ter as seguintes propriedades: nome: uma string representando o nome do cliente. conta: uma referência à conta bancária associada a esse cliente (objeto criado anteriormente). Crie uma função chamada mostrarSaldo que aceita o objeto cliente como parâmetro e imprime no console o nome do cliente e o saldo da sua conta utilizando this para acessar as propriedades do objeto. Realize operações de depósito e saque na conta bancária do cliente usando as funções do objeto contaBancaria e, em seguida, chame a função para exibir as informações atualizadas no console.\n".cyan);
const contaBancaria = {
  nome: 'Baianinho',
  saldo: 400000
}

function depositar(saldo){
  let depositar = Number(read.question('deposite: '));
  let depositou = saldo + depositar;
  console.log(`Voce depositou ${depositar} no banco. Seu saldo agora eh: ${depositou}`);
}
depositar(contaBancaria.saldo);

function sacar(saldo){
  let sacar = Number(read.question('saque: '));
  let sacou = saldo - sacar;
  console.log(`Voce sacou ${sacar} do banco. Seu saldo agora eh: ${sacou}`);
}
sacar(contaBancaria.saldo);

const cliente = {
  nome: 'Anao Redpill',
  saldo: 70.00
}

depositar(cliente.saldo);
sacar(cliente.saldo);

function mostrarSaldo(pessoa){
  console.log(`dono da conta: ${pessoa.nome}, e o saldo da conta eh: ${pessoa.saldo}`);
}
mostrarSaldo(contaBancaria);
mostrarSaldo(cliente);