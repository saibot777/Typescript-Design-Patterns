import { User } from "./User";
import { Company } from "./Company";

interface Marker {
    location: {
        lat: number;
        lng: number;
    }
}

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

    public addMarker(marker: Marker): void {
        const map = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: marker.location.lat,
                lng: marker.location.lng
            }
        });

        map.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: 'Hi There!'
            });
            
            infoWindow.open(this.googleMap, map)
        });
    }
}