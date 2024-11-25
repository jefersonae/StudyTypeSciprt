//Exemplo
type Name = 
    |[firstName : string, lastName : string]
    |[firstName : string, middleName : string, lastName : string];

function createPerson(...name : Name) {
    return [... name];
}

console.log(createPerson('Lucas', 'Fernandes'));
console.log(createPerson('Lucas', 'Silva', 'Fernandes'));