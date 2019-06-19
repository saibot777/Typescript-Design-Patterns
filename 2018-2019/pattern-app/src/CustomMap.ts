import { User } from "./User";
import { Company } from "./Company";

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    public addMarker(marker: User | Company): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: marker.location.lat,
                lng: marker.location.lng
            }
        });
    }
}