console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem(item) {
    basket.unshift(item);
    return true;
}

console.log(addItem("computer"));
addItem("monitor");
console.log(basket);
//used the above to test function. Everything worked!

addItem("speakers");
addItem("keyboard");
addItem("mouse");

function listItems() {
    for (let item of basket) {
        console.log(item);
    }
}

listItems();//function works!

function empty() {
    basket.splice(0, basket.length);
}

//console.log(basket.length-1);--originally set to basket.length-1. used to test and realize that's not what I wanted

empty();
console.log(basket);



// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch (e) {
    // Do nothing
}
