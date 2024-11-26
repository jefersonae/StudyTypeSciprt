var funcionario1 = {
    codFuncionario: 1,
    age: 35,
    name: 'José'
};
// funcionario1.codFuncionario = 3;  // Error por esta com readOnly
var funcionario2 = {
    codFuncionario: 2,
    age: 25,
    name: 'Maria'
};
// Funcina porque não esta com readOnly
funcionario2.codFuncionario = 3;
