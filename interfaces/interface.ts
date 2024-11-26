interface Pessoa {
    nome: string;
    sobrenome: string;
    idade: number;
}

function exibirNome(pessoa: Pessoa) {
    return `
        Nome: ${pessoa.nome} ${pessoa.sobrenome}
        Idade: ${pessoa.idade}
        `;
}

const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Fernandes',
    idade: 30
};

console.log(exibirNome(pessoa));