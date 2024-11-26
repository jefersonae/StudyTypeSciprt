function exibirNome(pessoa) {
    return "\n        Nome: ".concat(pessoa.nome, " ").concat(pessoa.sobrenome, "\n        Idade: ").concat(pessoa.idade, "\n        ");
}
var pessoa = {
    nome: 'Lucas',
    sobrenome: 'Fernandes',
    idade: 30
};
console.log(exibirNome(pessoa));
