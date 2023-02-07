let tupleUser: [string, number, boolean];

tupleUser = ["Aishwarya", 123456, true]
tupleUser = ["Shridhar", 1234, false]
// tupleUser = [1234, "Rohit", false]  // order is wrong


// RGB example

let rgb: [number, number, number];

rgb = [255, 255, 255];


// Tuples with type

type User = [number, string];

let user1: User = [12345, "Aishwarya"]


// Problems with Tuples

user1[1] = "Shridhar";
console.log(user1);

// user1.push(1245, true);
user1.push(1245, "Rohit");
console.log(user1);