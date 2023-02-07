"use strict";
class User {
    constructor(name, email) {
        this.city = "Panjim";
        this.name = name;
        this.email = email;
    }
}
const aish = new User("Aishwarya Parab", "aish@gmail.com");
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
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.city = "Panjim";
        // private courseCount: number = 1;
        this.courseCount = 1;
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get getCourseCount() {
        return this.courseCount;
    }
    set setCourseCount(courseNum) {
        if (courseNum < 1) {
            throw new Error("Course count should be more than 1");
        }
        this.courseCount = courseNum;
    }
}
// Inheritance
class SubUser extends User2 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this.courseCount = 4;
    }
}
const shri = new User2("Shridhar Maskeri", "shri@gmail.com");
