import { generateText, tool, stepCountIs } from "ai";
import { google } from "@ai-sdk/google";
import { z } from "zod";

import { getWeather } from "./weather";

const weatherTool = tool({
  description: "Get the current weather for a city.",

  inputSchema: z.object({
    location: z.string(),
  }),

  execute: async ({ location }) => {
    return await getWeather(location);
  },
});

export async function askAI(prompt: string): Promise<string> {
  const result = await generateText({
    model: google("gemini-2.5-flash"),

    tools: {
      weather: weatherTool,
    },

    stopWhen: stepCountIs(2),

    prompt,
  });

  //console.dir(result, { depth: null });

    return result.text;
}