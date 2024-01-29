import { getUserInput } from "./input-reader";
import { getChatbotMessage, sendPrompt } from "./openai";

export const executeChatbot = async () => {
  console.log("-----------------------------------------------------");
  console.log("Welcome to EPN chatbot, tell me how may i help you?");
  while (true) {
    // 1. input
    const input = await getUserInput();
    // 2. send prompt
    const response = await sendPrompt(input);
    const message = getChatbotMessage(response);
    console.log("response: ", message);

    // 3. feedback & prepare next input
  }
};

export default {};
