function detectType(val: number | string) {
    if(typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}

function provideId(id: string | null) {
    if(!id) {
        console.log("Please provide ID");
        return
    }

    // do some database operations
    id.toLowerCase()
}


function printAll(strs: string | string[] | null) {
    if(strs) {
        if(typeof strs === "object") {
            for(const s of strs) {
                console.log(s);
            }
        }
    } else if(typeof strs === "string") {
        console.log(strs);
    }
}


// The in Operator Narrowing

interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin) {
    // return account.isAdmin;
    // We cannot straightaway use this because we're not sure whether account is User or Admin type as of now.

    if("isAdmin" in account) {
        return account.isAdmin; 

        // In this way, we're narrowing down the type of account
    } else {
        return false;
    }
}


// The instanceof Narrowing

function logValue(x: Date | String) {
    if(x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}


// Using Type Predicates

type Fish = {swim: () => void}
type Bird = {fly: () => void}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
    if(isFish(pet)) {
        pet  // if you hover over this line, typescript is still confused whether pet is a fish or a bird
        return "Fish food";
    } else {
        pet
        return "Bird food";
    }
}


// Discriminated Unions

interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

function getArea(shape: Shape) {
    if(shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }
    // return shape.side * shape.side
}

// Exhaustiveness Checking

function getAreaTwo(shape: Shape) {
    switch(shape.kind) {
        case "circle": {
            return Math.PI * shape.radius ** 2
        }
        case "square": {
            return shape.side * shape.side
        }
        case "rectangle": {
            return shape.length * shape.width
        }
        default: {
            const defaultForShape: never = shape
            return defaultForShape
        }
    }
}