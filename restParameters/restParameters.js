var Produtos = /** @class */ (function () {
    function Produtos() {
    }
    Produtos.prototype.exibirProdutos = function () {
        var produtos = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            produtos[_i] = arguments[_i];
        }
        for (var _a = 0, produtos_1 = produtos; _a < produtos_1.length; _a++) {
            var produto = produtos_1[_a];
            console.log(produto);
        }
    };
    return Produtos;
}());
var depatarmentoInformatica = new Produtos();
console.log('Todos os produtos do departamento de informática disponíveis no estoque são:');
depatarmentoInformatica.exibirProdutos('Computador', 'Notebook', 'Impressora', 'Mouse', 'Teclado', 'Monitor');
