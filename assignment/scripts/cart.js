console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem(item) {
    if (isFull()) {
        return false;
    } else {
        basket.unshift(item);
        return true;
    }
}

console.log(addItem("computer"));
addItem("monitor");
console.log(basket);
//used the above to test function. Everything worked!

addItem("speakers");
addItem("keyboard");
addItem("mouse");

function removeItem(item) {
    let itemNumber = basket.indexOf(item);

    if (itemNumber === -1) {
        return null;
    } else {
        let foundItem = basket.splice(itemNumber, 1);
        return foundItem.toString();
    }
}

console.log("Test - remove keyboard. Should return keyboard.", removeItem("keyboard"));
console.log("Test - remove book should return null.", removeItem("book"));

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

//empty();--commented out so I can test isFull more easily
console.log(basket);

function isFull() {
    return basket.length >= 5 ? true : false;
}

console.log(isFull());//should be true
console.log(addItem("desk"));//should return false
console.log(basket);//should list the same five items
empty();
console.log(isFull());//should be false
console.log(addItem("desk"));//should return true
console.log(basket);//should return [desk]


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
