import { getWeather } from "./weather";
import { askAI } from "./ai";

const city = process.argv[2];

if (!city) {
  console.error("Please provide a city.");
  process.exit(1);
}

const weather = await getWeather(city);

const capitalize = (text: string) =>
  text.replace(/\b\w/g, (char) => char.toUpperCase());

const tip = await askAI(`
You are a professional weather assistant.

Here is the current weather data for ${city}:
- Condition: ${weather.condition} (${weather.description})
- Temperature: ${weather.temperature}°C
- Feels Like: ${weather.feelsLike}°C
- Humidity: ${weather.humidity}%
- Wind Speed: ${weather.windSpeed} m/s

DO NOT repeat any of those values in your response.

Your only task is to provide one practical recommendation based on this weather.

Rules:
- Maximum 50 characters.
- One sentence only.
- No emojis.
- No markdown.
- No bullet points.

Examples:
Carry an umbrella today.
Stay hydrated today.
Wear a light jacket.
Use sunscreen outdoors.
Strong winds—be careful.
Great weather for a walk.
High humidity today.
`);

console.log(`
🌤 Weather AI CLI
═══════════════════════════════
📍 Location   : ${capitalize(city)}
🌥 Weather    : ${capitalize(weather.description)}
🌡 Temperature: ${weather.temperature}°C
🥵 Feels Like : ${weather.feelsLike}°C
💧 Humidity   : ${weather.humidity}%
💨 Wind Speed : ${weather.windSpeed} m/s
💡 AI Tip
──────────────────────────────
${tip}
──────────────────────────────
`);