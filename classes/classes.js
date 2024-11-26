// Classe sem constructor
var Estudante = /** @class */ (function () {
    function Estudante() {
    }
    return Estudante;
}());
var estudante = new Estudante();
estudante.codigoEstudante = 842;
estudante.nomeEstudante = 'João';
// Acessar os campos:
console.log('Código do Estudante ... :' + estudante.codigoEstudante);
console.log('Nome do Estudante ..... :' + estudante.nomeEstudante);
var EstudanteA = /** @class */ (function () {
    // Definir o construtor
    function EstudanteA(codigoEstudante, nomeEstudante) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }
    EstudanteA.prototype.listarEstudante = function () {
        console.log('Código do Estudante ... :' + this.codigoEstudante);
        console.log('Nome do Estudante ..... :' + this.nomeEstudante);
    };
    return EstudanteA;
}());
// Acessar os campos:
var estudanteA = new EstudanteA(10, 'Maria');
