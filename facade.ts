class FrenziePlayer {
    on() {
        console.log('Frenzie player turning on...');
    }

    turnOff() {
        console.log('Frenzie player turning off...')
    }

    play() {
        console.log('Playing Frenzie disc...');
    }
}

class Amplifier {
    on() {
        console.log('Amp player turning on...');
    }

    turnOff() {
        console.log('Amp player turning off...')
    }

    setSource(source: string) {
        console.log('Setting source to ' + source);
    }

    setVolume(volumeLevel: number) {
        console.log('Setting volume to ' + volumeLevel);
    }
}

class Lights {
    dim() {
        console.log('Lights are dimming..');
    }
}

class TV {
    turnOn() {
        console.log('Turning on...');
    }

    turnOff() {
        console.log('Turning off...');
    }
}

class PopcornMaker {
    turnOn() {
        console.log('Popcorn maker turning on...');
    }
    turnOff() {
        console.log('Popcorn maker turning on...');
    }
    pop() {
        console.log('Popping corn!');
    }
}

class HomeTheaterFacade {
    private frenzie: FrenziePlayer;
    private amp: Amplifier;
    private lights: Lights;
    private tv: TV;
    private popcornMaker: PopcornMaker;

    constructor(amp: Amplifier, frenzie: FrenziePlayer, lights: Lights, tv: TV, popcornMaker: PopcornMaker) {
        this.frenzie = frenzie;
        this.amp = amp;
        this.lights = lights;
        this.tv = tv;
        this.popcornMaker = popcornMaker;
    }

    public watchMovie() {
        this.popcornMaker.turnOn();
        this.popcornMaker.pop();

        this.lights.dim();

        this.tv.turnOn();
        this.amp.on();
        this.amp.setSource('frenzie');
        this.amp.setVolume(11);

        this.frenzie.on();
        this.frenzie.play();
    }

    public endMovie() {
        this.popcornMaker.turnOff();
        this.amp.turnOff();
        this.tv.turnOff();
        this.frenzie.turnOff();
    }
}

let frenzie = new FrenziePlayer();
let amp = new Amplifier();
let lights = new Lights();
let tv = TV();
let popcornMaker = new PopcornMaker();

let homeTheater = new HomeTheaterFacade(amp, frenzie, lights, tv, popcornMaker);
homeTheater.watchMovie();