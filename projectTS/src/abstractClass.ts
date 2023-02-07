abstract class TakePicture {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {

    }

    abstract getSepia(): void;

    getReelTime(): number {
        // some complex calculation
        return 8
    }

}

// const moto = new TakePhoto("test", "Test"); this is valid when abstract keyword is not there

class SnapChat extends TakePicture {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia");
    }

} 

const moto = new SnapChat("test", "Test", 12345);
console.log(moto.getReelTime()) // output: 8
