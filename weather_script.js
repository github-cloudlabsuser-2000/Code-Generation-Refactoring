class WeatherAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.openweathermap.org/data/2.5';
    }

    async getCurrentWeather(city) {
        try {
            const response = await fetch(`${this.baseUrl}/weather?q=${city}&appid=${this.apiKey}&units=metric`);
            if (!response.ok) {
                throw new Error(`Error fetching current weather data: ${response.statusText}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getFiveDayForecast(city) {
        try {
            const response = await fetch(`${this.baseUrl}/forecast?q=${city}&appid=${this.apiKey}&units=metric`);
            if (!response.ok) {
                throw new Error(`Error fetching forecast data: ${response.statusText}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

// Ejemplo de uso:
const weather = new WeatherAPI('f513f9668b45c74b8afb2ade09fd2bde');

// Obtener el clima actual
weather.getCurrentWeather('Madrid')
  .then(data => console.log('Current Weather:', data))
  .catch(error => console.error(error));

// Obtener el pronóstico de 5 días con intervalos de 3 horas
weather.getFiveDayForecast('Madrid')
  .then(data => console.log('5-Day Forecast:', data))
  .catch(error => console.error(error));