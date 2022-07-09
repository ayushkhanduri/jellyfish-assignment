export class Utils {
    static kelvinToCelsius(tempInKelvin: number) {

        return tempInKelvin ? +(tempInKelvin - 273.15).toFixed(2) : 0;
    }
}