<div align="center">

# 🌤️ Weather AI CLI

### An AI-powered command-line weather assistant built with TypeScript, Bun, Google Gemini, and OpenWeather.

Ask for the weather in natural language, and Gemini intelligently decides when to call a weather tool to retrieve live weather data.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google-Gemini-blue?style=for-the-badge&logo=google)
![OpenWeather](https://img.shields.io/badge/OpenWeather-API-orange?style=for-the-badge)

</div>

---

# 📖 Overview

Weather AI CLI is a command-line application that combines **Google Gemini's Tool Calling capabilities** with the **OpenWeather API** to answer weather questions naturally.

Instead of hardcoding weather responses, Gemini analyzes the user's request, decides when weather information is required, calls a custom weather tool, and generates a human-friendly response.

This project was built as a learning project to understand modern AI application development, tool calling, API integration, asynchronous programming, and clean TypeScript architecture.

---

# ✨ Features

- 🤖 AI-powered weather assistant
- 🛠️ Gemini Tool Calling
- 🌍 Live weather data
- 📍 Automatic geocoding (City → Coordinates)
- 🌡️ Current temperature
- 🥵 Feels-like temperature
- 💧 Humidity
- 💨 Wind speed
- ☁️ Weather condition & description
- ⚠️ Robust error handling
- 📦 Modular TypeScript architecture

---

# 🏗️ Architecture

```text
                 User
                  │
                  ▼
           Command Line (CLI)
                  │
                  ▼
              index.ts
                  │
                  ▼
              askAI()
                  │
                  ▼
        Google Gemini 2.5 Flash
                  │
        Decides to use Tool
                  │
                  ▼
            weatherTool
                  │
                  ▼
           getWeather()
          ┌───────────────┐
          ▼               ▼
getCoordinates()   getCurrentWeather()
          │               │
          └──────┬────────┘
                 ▼
        OpenWeather API
                 │
                 ▼
          Weather Data
                 │
                 ▼
        Gemini generates reply
                 │
                 ▼
             Terminal
```

---

# 📂 Project Structure

```
src/
│
├── index.ts
│   └── CLI entry point
│
├── ai.ts
│   └── Gemini integration & Tool Calling
│
├── weather.ts
│   └── OpenWeather API communication
│
├── config.ts
│   └── Environment configuration
│
└── types.ts
    └── TypeScript interfaces
```

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| TypeScript | Application language |
| Bun | Runtime |
| Google Gemini 2.5 Flash | AI model |
| AI SDK | Tool Calling |
| OpenWeather API | Live weather |
| Zod | Input validation |

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/weather-ai-cli.git

cd weather-ai-cli
```

Install dependencies

```bash
bun install
```

---

# 🔑 Environment Variables

Create a `.env` file.

```env
OPENWEATHER_API_KEY=your_openweather_api_key
GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_api_key
```

---

# ▶️ Usage

```bash
bun run src/index.ts Colombo
```

```bash
bun run src/index.ts "New York"
```

```bash
bun run src/index.ts "Tokyo"
```

---

# 💻 Example Output

```text
> bun run src/index.ts Colombo

The current weather in Colombo is overcast clouds.

🌡 Temperature : 30.6°C
🥵 Feels Like : 37.4°C
💧 Humidity   : 73%
💨 Wind Speed : 6.09 m/s

It may feel warmer than the actual temperature due to the humidity.
```

---

# 🔄 How It Works

1. The user enters a city name.
2. `index.ts` sends the request to `askAI()`.
3. Gemini receives the prompt.
4. Gemini decides that weather information is required.
5. Gemini calls the custom `weather` tool.
6. The tool converts the city into geographic coordinates.
7. Coordinates are sent to the OpenWeather API.
8. Live weather data is returned.
9. The data is simplified into a clean TypeScript object.
10. Gemini generates a natural-language response.
11. The CLI prints the response to the terminal.

---

# 📚 What I Learned

This project helped me understand:

- TypeScript fundamentals
- Async / Await
- Promises
- Fetch API
- REST APIs
- JSON parsing
- API authentication
- Environment variables
- Error handling
- Type assertions
- Interfaces
- AI SDK
- Gemini Tool Calling
- Software architecture
- Separation of concerns
- Modular application design

---

# 🔮 Future Improvements

- 5-Day Forecast
- Weather Alerts
- Air Quality Index
- Weather Maps
- Multiple AI Providers
- Interactive Chat Mode
- Docker Support
- Voice Assistant
- Unit Selection (°C / °F)
- Weather History

---

# 👨‍💻 Author

**Randiw Rodrigo**

Computer Science Student passionate about Software Engineering and AI Engineering.

Built as a learning project to explore AI-powered application development using modern TypeScript technologies.

---

## ⭐ If you found this project interesting, consider giving it a star!
