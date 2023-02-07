var score;
score = 44;
console.log(score);
score = "Good";
console.log(score);
var aishUser = {
    name: "Aishwarya",
    id: 12345
};
var shriUser = {
    name: "Shridhar",
    id: 12346,
    isAccess: true
};
// Union with functions
function getDBId(id) {
    console.log("The DB Id is: ".concat(id));
}
getDBId(4);
getDBId("4");
