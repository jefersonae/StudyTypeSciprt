// Classe sem constructor
class Estudante {
  codigoEstudante: number;
  nomeEstudante: string;
}

const estudante = new Estudante();

estudante.codigoEstudante = 842;
estudante.nomeEstudante = 'João';

// Acessar os campos:
console.log('Código do Estudante ... :' + estudante.codigoEstudante);
console.log('Nome do Estudante ..... :' + estudante.nomeEstudante);

class EstudanteA {
    codigoEstudante: number;
    nomeEstudante: string;

    // Definir o construtor
    constructor(codigoEstudante: number, nomeEstudante: string) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }

    listarEstudante(): void {
        console.log('Código do Estudante ... : ' + this.codigoEstudante);
        console.log('Nome do Estudante ..... : ' + this.nomeEstudante);
    }
}

// Acessar os campos:
const estudanteA = new EstudanteA(10, 'Maria');