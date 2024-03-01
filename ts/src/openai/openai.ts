import OpenAI from "openai";
import { ENV } from "../config";
import prompts from "../prompts";

let openai: OpenAI;

export const loadOpenAIChatbot = async () => {
  openai = new OpenAI({
    apiKey: ENV.OPENAI_API_KEY,
  });
};

export const sendPrompt = async (message: string) => {
  return openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: prompts.GENERAL("https://www.epn.edu.ec"),
      },
      { role: "user", content: `'''${message}'''` },
    ],
    model: "gpt-4-1106-preview",
    /* tools: [
      {
        type: "function",
        function: {
          name: "parse_data",
          description: "Parse raw HTML data nicely",
          parameters: {
            type: "object",
            properties: {
              data: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    title: { type: "string" },
                    rating: { type: "number" },
                    price: { type: "number" },
                  },
                },
              },
            },
          },
        },
      },
    ],
    tool_choice: {
      type: "function",
      function: { name: "parse_data" },
    }, */
  });
};
