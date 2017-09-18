interface IPhone {
    useLighting();
}

interface Android {
    useMicroUsb();
}

class iPhone7 implements IPhone {
    useLighting() {
        console.log('Using lighting port...');
    }
}

class GooglePixel implements Android {
    useMicroUsb() {
        console.log('Using micro USB...');
    }
}

class LightingToMicroUSBAdapter implements Android {
    iphoneDevice: IPhone;

    constructor(iphone: IPhone) {
        this.iphoneDevice = iphone;
    }

    public useMicroUsb() {
        console.log('Want to use micro USB, converting to Lightning...');
        this.iphoneDevice.useLighting();
    }
}

let iphone = new iPhone7();
let chargeAdapter = new LightingToMicroUSBAdapter(iphone);

chargeAdapter.useMicroUsb();