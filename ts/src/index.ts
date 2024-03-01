import { loadBing } from "./bing";
import { executeChatbot } from "./chatbot";
import { loadVariables } from "./config";
import { llamaIndex } from "./llama-index/query";
import { runChatEngine } from "./llama-index/chat-engine";
import { loadOpenAIChatbot } from "./openai/openai";
import { saveIndex } from "./llama-index/save-index";


(async () => {
  await loadVariables();
  await loadOpenAIChatbot();
  await loadBing();
  // await executeChatbot();
  // await llamaIndex();
  // await runChatEngine();
  await saveIndex();
  console.log("\n\n\n\n\n----> END")
})();
