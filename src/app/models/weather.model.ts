import {Applyable} from "./applyable.model";

export class Weather extends Applyable {
    coord: {
        lon: number,
        lat: number
    };
    weather: [
        {
            id: number;
            main: string;
            description: string;
            icon: string;
        }
    ];
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level?: number;
        grnd_level?: number;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    clouds: {
        all: number;
    };
    dt: number;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;

    constructor() {
        super()
    }

    // Get date as a local datetime string
    getDate(): string {
        return new Date(this.dt * 1000).toLocaleString()
    }

    // Get sunrise as a local time string
    getSunrise(): string{
        return new Date(this.sys.sunrise * 1000).toLocaleTimeString()
    }

    // Get sunset as a local time string
    getSunset(): string {
        return new Date(this.sys.sunset * 1000).toLocaleTimeString()
    }

    // Get timezone in hours with appropriate sign
    getTimeZone(): string {
        let sign= "- "
        if (this.timezone > 0 ) {
            sign = "+ "
        }
        return sign + (this.timezone / 3600).toFixed(2)
    }
}
