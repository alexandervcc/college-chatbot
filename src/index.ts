import { executeChatbot } from "./chatbot";
import { loadVariables } from "./config";
import { loadOpenAIChatbot } from "./openai/openai";

(async () => {
  await loadVariables();
  await loadOpenAIChatbot();
  await executeChatbot();
  console.log("\n\n\n\n\n----> END")
})();
