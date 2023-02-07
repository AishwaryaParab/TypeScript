"use strict";
class TakePicture {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // some complex calculation
        return 8;
    }
}
// const moto = new TakePhoto("test", "Test"); this is valid when abstract keyword is not there
class SnapChat extends TakePicture {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const moto = new SnapChat("test", "Test", 12345);
console.log(moto.getReelTime()); // output: 8
