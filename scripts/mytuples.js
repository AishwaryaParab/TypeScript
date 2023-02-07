var tupleUser;
tupleUser = ["Aishwarya", 123456, true];
tupleUser = ["Shridhar", 1234, false];
// tupleUser = [1234, "Rohit", false]  // order is wrong
// RGB example
var rgb;
rgb = [255, 255, 255];
var user1 = [12345, "Aishwarya"];
// Problems with Tuples
user1[1] = "Shridhar";
console.log(user1);
// user1.push(1245, true);
user1.push(1245, "Rohit");
console.log(user1);
