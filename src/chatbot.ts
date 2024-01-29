import { ChatCompletionMessageParam } from "openai/resources";
import { getUserInput } from "./input-reader";
import { getChatbotMessage, sendPrompt } from "./openai";

export const executeChatbot = async () => {
  console.log("-----------------------------------------------------");
  console.log("Welcome to EPN chatbot, tell me how may i help you?");
  const messagesHistory: Array<ChatCompletionMessageParam> = [];
  while (true) {
    const userInput = await getUserInput();

    const chatbotResponse = await sendPrompt(userInput);

    const chatbotMessage = getChatbotMessage(chatbotResponse);

    console.log("\nCHATBOT: ");
    console.log(chatbotMessage);

    messagesHistory.push(
      { role: "assistant", content: chatbotMessage },
      { role: "user", content: userInput }
    );
  }
};

export default {};
