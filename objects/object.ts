
interface Person {
    name: string;
    age: number;
}

function greet(person : Person) {
    return "Olá, " + person.name;
}

interface PaintOptions {
    shape: string;
    xPos?: number;
    yPos?: number;
}

console.log(greet({name: "John", age: 21}));