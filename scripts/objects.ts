function createCourse(): {name: String, price: number} {
    return {name: "reactjs", price: 499}
}


// Weird Behaviour of objects
// function createUser({name: string, isPaid: boolean}) {

// }

// let newUser = {name: "Aishwarya Parab", isPaid: true, email: "aish@gmail.com"}

// createUser(newUser)


type User = {
    name: string;
    email: string;
    isPaid: boolean
}

function createUser(user: User) {

}

createUser({name: "Aishwarya Parab", email: "aish@gmail.com", isPaid: true})


// readonly and optional

type ActiveUser = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credCardNumber?: number
}

let myUser: ActiveUser = {
    _id: "12345",
    name: "Aishwarya",
    email: "aish@gmail.com",
    isActive: true
}

myUser.email = "aish@yahoo.com";
// myUser._id = "123"; This shouldn't be allowed as id is readonly


// Using the & symbol

type cardNumber = {
    cardNum: string;
}

type cardDate = {
    date: string;
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

let card: cardDetails = {
    cardNum: "8765432",
    date: "13/28",
    cvv: 526,
} 