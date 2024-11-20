/*
Nome      : app03.js
Finalidade: JavaScript: conhecendo objetos
Observação: 03 Percorrendo objetos
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

console.log("Lista de exercícios\n");
pare();

// 1 ##########################################################################################################################################
console.log("1 - Crie um objeto chamado pessoa que represente informações sobre uma pessoa. O objeto deve ter as seguintes propriedades: nome e notas. Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa. Adicione um método chamado classificarDesempenho ao objeto pessoa. Este método deve retornar uma categoria de desempenho com base na média calculada. Utilize as seguintes categorias: Desempenho excelente: média >= 9,  Bom desempenho: 7.5 <= média entre 7.6 e 8.9, Desempenho regular: 6 <= média entre 6 e 7.5 e Desempenho insuficiente: média < 6. Chame o método calcularMediaNotas para calcular a média das notas da pessoa e imprima no console a média calculada. Chame o método classificarDesempenho e imprima no console a categoria de desempenho da pessoa.\n".cyan);
const pessoa = {
    nome: "Licomo Orrego",
    notas: [10, 10, 10, 10],
    calcularMediaNotas: function(){
        const soma = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
        return soma / this.notas.length;
    },
    classificarDesempenho: function(){
        const media = this.calcularMediaNotas();
        if(media >= 9){
            return "Desempenho otimo"
        } else if(media >= 7.6 && media < 9){
            return "Desempenho bom"
        } else if(media >= 6 && media < 7.6){
            return "Passou se arrastando"
        } else {
            return "voce eh horrivel, seus pais tem vergonha de terem feito voce, voce da desgosto pra eles seu bosta, pedaco de lixo inutil"
        }
    }
}

const media = pessoa.calcularMediaNotas();
console.log("Média calculada:", media.toFixed(2));

const desempenho = pessoa.classificarDesempenho();
console.log("Categoria de desempenho:", desempenho);
pare();

// 2 ##########################################################################################################################################
console.log("2 - Crie um objeto chamado carro que represente as informações de um veículo. O objeto deve ter as seguintes propriedades: marca (string): marca do carro. modelo (string): modelo do carro. ano (number): ano de fabricação do carro. cor (string): cor do carro. Utilize o loop for...in para percorrer todas as propriedades do objeto carro e imprima no console o nome da propriedade e o seu valor. Adicione mais propriedades ao objeto carro para representar características adicionais do veículo. Utilize novamente o loop for...in para percorrer todas as propriedades atualizadas do objeto carro e imprima no console o nome da propriedade e o seu valor.\n".cyan);
const carro = {
  marca: 'Ford',
  modelo: 'Lienr Raband',
  ano: 2024,
  cor: 'Azul escuro cintilante'
}

carro.portas = 2;

for(let chave in carro){
  const tipo = typeof carro[chave];
  if(tipo !== 'object' && tipo !== 'function'){
      const texto = `${chave}: ${carro[chave]}`;
      console.log(texto);
  }
}
pare(); 

// 3 ##########################################################################################################################################
console.log("3 - Crie um arquivo chamado metodosObjeto.js para realizar este exercício. Utilize o objeto carro do exercício 2 com as propriedades iniciais (marca, modelo, ano, cor) e adicione: ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não. ligar: um método que imprime no console uma mensagem indicando que o carro está ligado. desligar: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: se o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa. obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, estado de ligado/desligado). Em seguida, faça o seguinte: Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes. Chame o método obterDetalhes e imprima no console a string retornada.\n".cyan);
const carro1 = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2021,
  cor: "Prata",
  ligado: false,

  ligar: function () {
    if (this.ligado) {
      console.log("O carro já está ligado.");
    } else {
      this.ligado = true;
      console.log("O carro foi ligado.");
    }
  },

  desligar: function () {
    if (!this.ligado) {
      console.log("O carro já está desligado.");
    } else {
      this.ligado = false;
      console.log("O carro foi desligado.");
    }
  },

  obterDetalhes: function () {
    return `Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}, Estado: ${
      this.ligado ? "Ligado" : "Desligado"
    }.`;
  }
};

console.log(carro1.ligar);
console.log(carro1.ligar);

console.log(carro1.desligar);
console.log(carro1.desligar);

console.log(carro1.obterDetalhes());

pare();

// 4 ##########################################################################################################################################
console.log("4 - No objeto carro, adicione uma nova propriedade chamada placa representando a placa do veículo. Defina a propriedade placa como não enumerável, para que ela não seja listada ao percorrer as propriedades do objeto. Utilize um loop for...in para percorrer as propriedades do objeto carro e imprima no console apenas as propriedades enumeráveis. Utilize o método Object.keys() para obter um array contendo apenas as chaves enumeráveis do objeto carro e imprima no console esse array. Tente acessar a propriedade placa diretamente usando carro.placa e imprima no console o resultado obtido.\n".cyan);
Object.defineProperty(carro1, "placa", {
  value: 'V0C3D4OCU',
  enumerable: false
});

for(let propriedade in carro){
  console.log(`${propriedade}: ${carro[propriedade]}`);
}

let chavesEnumeraveis = Object.keys(carro);
console.log("\nChaves enumeráveis do objeto carro:", chavesEnumeraveis);

console.log("Placa do carro:", carro.placa);
pare();

// 5 ##########################################################################################################################################
console.log("5 - Crie um novo objeto chamado carroNovo para representar as informações de um novo carro. O objeto deve ter as seguintes propriedades:  marca (string): marca do novo carro. modelo (string): modelo do novo carro. ano (number): ano de fabricação do novo carro. cor (string): cor do novo carro. Utilize o operador de espalhamento (...) para criar um novo objeto chamado carroComNovosDetalhes que herde todas as propriedades do objeto carro e adicione as propriedades do objeto carroNovo. Imprima no console o objeto carroComNovosDetalhes para verificar as informações do carro com os novos detalhes. Modifique o valor de uma propriedade no objeto carroComNovosDetalhes e imprima novamente o objeto no console para confirmar as alterações.\n".cyan);
const carroNovo = {
  marca: 'Ford',
  modelo: 'Adolfs Hilt',
  anoFabricacao: 1945,
  cor: 'Vermelho, amarelo e preto'
}

let carroComNovosDetalhes = { ...carro, ...carroNovo };
console.log(carroComNovosDetalhes);