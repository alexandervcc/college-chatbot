import { ChatCompletion } from "openai/resources";

export const getChatbotMessage = (response: ChatCompletion) => {
  return response.choices[0].message.content;
};
