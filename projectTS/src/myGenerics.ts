const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any {
    return val
}

// Using Generics

function identityThree<Type>(val: Type): Type {
    return val
}

identityThree("3") // will return "3"
identityThree(3) // will return 3
identityThree(true) // will return true

// Convention of writing Generics

function identityFour<T>(val: T): T {
    return val
}

interface Bottle {
    brand: string,
    type: number
}

identityFour<Bottle>({brand: "Tupperware", type: 12345});



// Generics with Arrays and Arrow Functions


function getSearchProducts<T>(products: T[]): T {
    return products[3];
}

// Arrow function

const getMoreSearchProducts = <T>(products: T[]): T => {
    return products[3];
}



// Using Type Parameters in Generic Constraints

function functionOne<T, U>(valOne: T, valTwo: U):object {
    return {
        valOne,
        valTwo
    }
}

functionOne(3, "4");

//

interface Database {
    connection: string,
    username: string,
    password: string
}

function functionTwo<T, U extends Database>(valOne: T, valTwo: U):object {
    return {
        valOne,
        valTwo
    }
}

functionTwo(3, {connection: "aish", username: "Aishwarya", "password": "aish"});


// Class with Generics

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    instructor: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addProducts(product: T) {
        this.cart.push(product);
    }
}