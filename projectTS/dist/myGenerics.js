"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// Using Generics
function identityThree(val) {
    return val;
}
identityThree("3"); // will return "3"
identityThree(3); // will return 3
identityThree(true); // will return true
// Convention of writing Generics
function identityFour(val) {
    return val;
}
identityFour({ brand: "Tupperware", type: 12345 });
// Generics with Arrays and Arrow Functions
function getSearchProducts(products) {
    return products[3];
}
// Arrow function
const getMoreSearchProducts = (products) => {
    return products[3];
};
// Using Type Parameters in Generic Constraints
function functionOne(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
functionOne(3, "4");
function functionTwo(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
functionTwo(3, { connection: "aish", username: "Aishwarya", "password": "aish" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addProducts(product) {
        this.cart.push(product);
    }
}
