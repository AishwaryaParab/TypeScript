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

// 5th example

function addThree(num: number):number {
    return num + 3;
}

addTwo(6);

// 6th example

function getValue(val: number): boolean | string {
    if(val > 5) {
        return true;
    } else {
        return "200 OK";
    }
}

console.log(getValue(7));

// 7th example

const getHello = (s: string): string => {
    return "Hello Aish!"
}

// 8th example

const heroes = ["Thor", "Ironman", "Captain America"];

heroes.map((hero): string => {
    return `Hero is ${hero}`;
})

// 9th example

function consoleError(errmsg: string): void {
    console.log(errmsg);
}

// 10th example (error handler)

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

