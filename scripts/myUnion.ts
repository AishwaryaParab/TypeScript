let score: number | string;

score = 44;
console.log(score);

score = "Good";
console.log(score);


// A person can be a User or Admin

type User = {
    name: string;
    id: number;
}

type Admin = {
    name: string;
    id: number;
    isAccess: boolean
}

let aishUser: User | Admin = {
    name: "Aishwarya",
    id: 12345
}

let shriUser: User | Admin = {
    name: "Shridhar",
    id: 12346,
    isAccess: true
}

// Union with functions

function getDBId(id: number | string) {
    // id.toLowerCase()

    if(typeof id === "string") {
        id.toLowerCase()
    }

    console.log(`The DB Id is: ${id}`);
}

getDBId(4);
getDBId("4");

// Union with Arrays

// Array of all numbers
const data: number[] = [1, 2, 3];

// Array of all string values
const data1: string[] = ["1", "2", "3"];

// Array of either all numbers or all string values
let data2: string[] | number[] = ["1", "2", "3"];
data2 = [1, 2, 3];

// Array of mixed numbers and string values
let data3: (string | number)[] = [1, "2", 3, "4"];


// strict assignment

let seatAllotment: "aisle" | "window" | "middle";

seatAllotment = "aisle"; // works fine
// seatAllotment = "crew";  // error