class User {
    name: string;
    email: string;
    private city: string = "Panjim";

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}

const aish = new User("Aishwarya Parab", "aish@gmail.com")

// aish.city // not allowed
// aish.city = "Porvorim" // not allowed


// A Professional Way of Declaring Classes

// class User2 {
//     private city: string = "Panjim"

//     constructor(
//         public name: string,
//         public email: string
//     ) {

//     }
// }

// const shri = new User2("Shridhar Maskeri", "shri@gmail.com");


// Getters and Setters

class User2 {
    private city: string = "Panjim";
    // private courseCount: number = 1;

    protected courseCount: number = 1; 

    constructor(
        public name: string,
        public email: string
    ) {

    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get getCourseCount(): number {
        return this.courseCount;
    }

    set setCourseCount(courseNum: number) {
        if(courseNum < 1) {
            throw new Error("Course count should be more than 1");
        }
        this.courseCount = courseNum;
    }
}

// Inheritance

class SubUser extends User2 {
    isFamily: boolean = true;

    changeCourseCount() {
        this.courseCount = 4;
    }

}

const shri = new User2("Shridhar Maskeri", "shri@gmail.com");