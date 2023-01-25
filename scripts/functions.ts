function addTwo(num: number) {
    return num + 2;
}

addTwo(6);

export {}

// 2nd example

function getUpper(val: string) {
    return val.toUpperCase();
}

getUpper("Aishwarya");

// 3rd example

function signUpUser(name: string, email: string, isPaid: boolean) {

}

signUpUser("Aishwarya", "aish@gmail.com", true);

// 4th example

const loginUser = (name: string, email: string, isPaid: boolean = false) => {

}

loginUser("aish", "aish@a.com");