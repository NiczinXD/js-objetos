const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
}

console.log(estudante.nome);
console.log(`o nome do estudante eh ${estudante.nome}`);
console.log(`os três primeiros numeros do CPF são ${estudante.cpf.substring(0, 3)}`);
