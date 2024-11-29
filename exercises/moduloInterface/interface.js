var myFavoriteIceCream = {
    flavor: 'Vanilla',
    scoops: 2
};
console.log(myFavoriteIceCream.flavor);
// Function tooManyScoops is already defined elsewhere
function tooManyScoops(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    }
    else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops({ flavor: 'strawberry', scoops: 5 }));
