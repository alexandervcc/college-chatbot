import OpenAI from "openai";
import { ENV } from "../config";

console.log(ENV);

let openai: OpenAI;

export const loadOpenAIChatbot = async () => {
  openai = new OpenAI({
    apiKey: ENV.OPENAI_API_KEY,
  });
};

export const sendPrompt = async (message: string) => {
  return openai.chat.completions.create({
    messages: [{ role: "user", content: message }],
    // model: "gpt-3.5-turbo",
    model: "gpt-4",
    
  });
};
