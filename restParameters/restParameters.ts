class Produtos {
    public exibirProdutos(...produtos: string[]): void{
        for (const produto of produtos) {
            console.log(produto);
        }
    }
}

const depatarmentoInformatica = new Produtos();
console.log( 
    'Todos os produtos do departamento de informática disponíveis no estoque são:',
);

depatarmentoInformatica.exibirProdutos(
    'Computador',
    'Notebook',
    'Impressora',
    'Mouse',
    'Teclado',
    'Monitor',
);