const superheroes: string[] = [];

superheroes.push("Thor");
superheroes.push("Ironman");

// Another way to represent arrays

const supervillains: Array<String> = [];

supervillains.push("Thanos");
supervillains.push("Ultron");

// Array of Objects

type User = {
    name: string;
    email: string;
    isActive: boolean;
}

const allUsers: Array<User> = [];

allUsers.push({
    name: "Aishwarya",
    email: "aish@gmail.com",
    isActive: true
})


// Defining 2-D arrays

const colors: number[][] = [];

colors.push([255, 255, 255]);


