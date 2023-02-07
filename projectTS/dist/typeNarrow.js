"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    // do some database operations
    id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
}
function isAdminAccount(account) {
    // return account.isAdmin;
    // We cannot straightaway use this because we're not sure whether account is User or Admin type as of now.
    if ("isAdmin" in account) {
        return account.isAdmin;
        // In this way, we're narrowing down the type of account
    }
    else {
        return false;
    }
}
// The instanceof Narrowing
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet; // if you hover over this line, typescript is still confused whether pet is a fish or a bird
        return "Fish food";
    }
    else {
        pet;
        return "Bird food";
    }
}
function getArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    // return shape.side * shape.side
}
// Exhaustiveness Checking
function getAreaTwo(shape) {
    switch (shape.kind) {
        case "circle": {
            return Math.PI * shape.radius ** 2;
        }
        case "square": {
            return shape.side * shape.side;
        }
        case "rectangle": {
            return shape.length * shape.width;
        }
        default: {
            const defaultForShape = shape;
            return defaultForShape;
        }
    }
}
