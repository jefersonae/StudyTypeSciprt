interface IFuncionario {
    codFuncionario: number;
    age: number;
    name: string;
}

const funcionario1: Readonly<IFuncionario> = {
    codFuncionario: 1,
    age: 35,
    name: 'José'
}

// funcionario1.codFuncionario = 3;  // Error por esta com readOnly

const funcionario2: IFuncionario = {
    codFuncionario: 2,
    age: 25,
    name: 'Maria'
}
// Funcina porque não esta com readOnly
funcionario2.codFuncionario = 3;