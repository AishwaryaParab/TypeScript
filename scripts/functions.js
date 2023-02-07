"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
addTwo(6);
// 2nd example
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("Aishwarya");
// 3rd example
function signUpUser(name, email, isPaid) {
}
signUpUser("Aishwarya", "aish@gmail.com", true);
// 4th example
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("aish", "aish@a.com");
// 5th example
function addThree(num) {
    return num + 3;
}
addTwo(6);
// 6th example
function getValue(val) {
    if (val > 5) {
        return true;
    }
    else {
        return "200 OK";
    }
}
console.log(getValue(7));
