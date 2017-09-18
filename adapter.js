var iPhone7 = /** @class */ (function () {
    function iPhone7() {
    }
    iPhone7.prototype.useLighting = function () {
        console.log('Using lighting port...');
    };
    return iPhone7;
}());
var GooglePixel = /** @class */ (function () {
    function GooglePixel() {
    }
    GooglePixel.prototype.useMicroUsb = function () {
        console.log('Using micro USB...');
    };
    return GooglePixel;
}());
var LightingToMicroUSBAdapter = /** @class */ (function () {
    function LightingToMicroUSBAdapter(iphone) {
        this.iphoneDevice = iphone;
    }
    LightingToMicroUSBAdapter.prototype.useMicroUsb = function () {
        console.log('Want to use micro USB, converting to Lightning...');
        this.iphoneDevice.useLighting();
    };
    return LightingToMicroUSBAdapter;
}());
var iphone = new iPhone7();
var chargeAdapter = new LightingToMicroUSBAdapter(iphone);
chargeAdapter.useMicroUsb();
