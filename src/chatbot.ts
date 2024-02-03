import { ChatCompletionMessageParam } from "openai/resources";
import { getUserInput } from "./input-reader";
import { getChatbotMessage, sendPrompt } from "./openai";
import { makeSearchRequest } from "./bing";

export const executeChatbot = async () => {
  console.log("-----------------------------------------------------");
  console.log("Welcome to EPN chatbot, tell me how may i help you?");
  const messagesHistory: Array<ChatCompletionMessageParam> = [];
  while (true) {
    try {
      const userInput = await getUserInput();
      console.log("\nCHATBOT: ");

      const chatbotResponse = await sendPrompt(userInput);
      const chatbotMessage = getChatbotMessage(chatbotResponse);
      // console.log("GPT: ", JSON.stringify(chatbotResponse));
      // @ts-ignore
      // console.log("GPT: ", JSON.parse(chatbotResponse?.choices[0]?.message?.tool_calls[0]?.function?.arguments));
      console.log("GPT: ", chatbotMessage);
      
      
      messagesHistory.push(
        { role: "assistant", content: chatbotMessage },
        { role: "user", content: userInput }
      );

      // await makeSearchRequest(userInput);
    } catch (error) {
      console.error("ERROR: ", error);
    }
  }
};

export default {};
