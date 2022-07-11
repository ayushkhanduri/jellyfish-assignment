const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
export class Utils {
    static kelvinToCelsius(tempInKelvin: number) {

        return tempInKelvin ? +(tempInKelvin - 273.15).toFixed(2) : 0;
    }

    static getDayFromUTC(utc: number): string {
        const d = new Date(0);
        d.setUTCSeconds(utc);
        return d.toLocaleDateString('en-us');
    }
}