
// Variaveis variavel : tipo = dado
let nome : String = 'Big Jeff';
console.log(nome);

// Arrays [Type Annotations]
let animais : string[] = ['Elefante', 'Cachorro', 'Gato', 'Koala', 'Cavalo'];
console.log(animais);

// Objetos [Type Annotations]
let carro: {
    nome: string;
    ano: number;
    preco: number
};

carro = {nome: 'Corolla', ano: 2022, preco : 25000}
console.log(carro);

// Functions [Type Annotation]
function multNumber(numb1: number, numb2: number){
    return numb1*numb2;
}
console.log(multNumber(10,10));