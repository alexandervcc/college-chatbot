import { loadBing } from "./bing";
import { executeChatbot } from "./chatbot";
import { loadVariables } from "./config";
import { llamaIndex } from "./llama-index";
import { loadOpenAIChatbot } from "./openai/openai";


(async () => {
  await loadVariables();
  await loadOpenAIChatbot();
  await loadBing();
  // await executeChatbot();
  await llamaIndex();
  console.log("\n\n\n\n\n----> END")
})();
