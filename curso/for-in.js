const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['55119999998', '55119999993'],
    enderecos: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    },{
        rua: 'Rua Clotilde',
        numero: '71',
        complemento: null
    }]
}

for(let chave in estudante){
    const tipo = typeof estudante[chave];
    if(tipo !== 'object' && tipo !== 'function'){
        const texto = `a chave ${chave}, tem o valor ${estudante[chave]}`;
        console.log(texto);
    }
}