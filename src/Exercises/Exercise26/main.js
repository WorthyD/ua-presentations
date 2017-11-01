/*
    Exercise 26 JavaScript Review
*/
var productList = [{
        product: 'Shirt',
        price: 10.00,
        color: 'Blue'
    },
    {
        product: 'Pants',
        price: 15.00,
        color: 'Brown'
    },
    {
        product: 'Shoes',
        price: 5.00,
        color: 'Blue'
    }
];




/*
    This function should get the total price of the items in your cart.

var productList = [
    {product: 'Shirt', price: 10.00, color:'Blue'},
    {product: 'Pants', price: 10.00, color:'Brown'},
    {product: 'Shoes', price: 15.00, color: 'Blue'}
];

    The total is 35.


*/
function getTotalCost(cart) {
    var totalCost = 0;

    /*Calculate the total cost of the cart.*/
    /* Your Code Here */

    return totalCost;
}


var totalCost = getTotalCost(productList);
console.log(totalCost);



/*
    This function should get the total price of the items in your cart AND add tax to it.
var productList = [
    {product: 'Shirt', price: 10.00, color:'Blue'},
    {product: 'Pants', price: 10.00, color:'Brown'},
    {product: 'Shoes', price: 15.00, color: 'Blue'}
];
    The total is 35.
    Total plus tax is 36.75
*/

var TAX = 0.05;
function getTotalCostPlusTax(cart) {
    var costPlusTax = 0;

    var totalCart = getTotalCost(cart);

    //Your Code Here


    return costPlusTax;
}

var totalCostPlusTax = getTotalCostPlusTax(productList);
console.log(totalCostPlusTax);










