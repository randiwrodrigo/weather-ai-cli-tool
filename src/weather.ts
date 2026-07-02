import { OPENWEATHER_API_KEY } from "./config";
import type { Coordinates, CurrentWeather, OpenWeatherResponse } from "./types";

export async function getCoordinates(city: string): Promise<Coordinates> {
  const url =
    `https://api.openweathermap.org/geo/1.0/direct` +
    `?q=${encodeURIComponent(city)}` +
    `&limit=1` +
    `&appid=${OPENWEATHER_API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch coordinates. Status: ${response.status}`
    );
  }

  const data = (await response.json()) as Coordinates[];

  if (data.length === 0) {
    throw new Error(`City "${city}" not found.`);
  }

  return data[0]!;
}

export async function getCurrentWeather(
  lat: number,
  lon: number

): Promise<CurrentWeather> {
  const url =
    `https://api.openweathermap.org/data/2.5/weather` +
    `?lat=${lat}` +
    `&lon=${lon}` +
    `&units=metric` +
    `&appid=${OPENWEATHER_API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    const error = await response.text();

    throw new Error(
      `Failed to fetch current weather.\nStatus: ${response.status}\n${error}`
    );
  }
    const data = (await response.json()) as OpenWeatherResponse;

    const weather = data.weather[0];

    if (!weather) {
    throw new Error("Weather information not found.");
    }

    return {
    temperature: data.main.temp,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    condition: weather.main,
    description: weather.description,
    };
}

export async function getWeather(
  city: string
): Promise<CurrentWeather> {
  const coordinates = await getCoordinates(city);

  return await getCurrentWeather(
    coordinates.lat,
    coordinates.lon
  );
}