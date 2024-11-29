interface IceCream {
    flavor: string;
    scoops: number;
    instructions?: string;
}

let myFavoriteIceCream: IceCream = {
    flavor: 'Vanilla',
    scoops: 2
};

console.log(myFavoriteIceCream.flavor); 

// Function tooManyScoops is already defined elsewhere
function tooManyScoops(dessert: IceCream) {
    if (dessert.scoops >= 4) {
       return dessert.scoops + ' is too many scoops!';
    } else {
       return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops({flavor: 'strawberry', scoops: 5}));