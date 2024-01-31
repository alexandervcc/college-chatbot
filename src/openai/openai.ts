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
        content: prompts.GENERAL(
          "Cheems was a shiba inu dog, it was female. It died at 12 years old on 2023. It was an amazing dog, as it created a whole quantity of memes. when she died, all the world was too sad."
        ), 
      },
      { role: "user", content: message },
    ],
    model: "gpt-4",
  });
};
