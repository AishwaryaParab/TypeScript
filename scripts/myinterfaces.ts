interface User {
    readonly dbID: number,
    name: string,
    userId: number
    googleId?: string,
    // startTrial: () => string
    startTrial(): string  //both are right
    getCoupon(couponName: string): number
}

// type User = {
//     name: string;
//     userId: number;
// }

// Generating a githubToken

interface User {
    // New property
    githubToken: string
}


const aish: User = {
    dbID: 155,
    name: "Aishwarya Parab",
    userId: 12345,
    startTrial: () => {
        return "Trial started."
    },
    getCoupon: (name: "aish2023") => {
        return 10679
    },
    githubToken: "github"
}


// Extending an Interface

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const shri: Admin = {
    dbID: 156,
    name: "Shridhar Maskeri",
    userId: 1234,
    startTrial: () => {
        return "Trial started."
    },
    getCoupon: (name: "shri2023") => {
        return 10769
    },
    githubToken: "github",
    role: "admin"
}