import { askAI } from "./ai";

const city = process.argv[2];

if (!city) {
  console.error("Please provide a city.");
  process.exit(1);
}

const answer = await askAI(`
You are a helpful weather assistant.

Provide a short weather summary for ${city}.

Keep the response under 80 words.
Mention:
- temperature
- feels like
- humidity
- wind
- give a small recommendation.
`);

console.log(`
🌤  Weather CLI
═══════════════════════════════

📍 Location : ${city}

🤖 AI Summary
───────────────────────────────
${answer}
───────────────────────────────
`);