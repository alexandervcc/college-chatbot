import fs from "fs/promises";
import { stdin as input, stdout as output } from "node:process";
import readline from "node:readline/promises";

import {
  ContextChatEngine,
  Document,
  serviceContextFromDefaults,
  VectorStoreIndex,
} from "llamaindex";


export async function runChatEngine() {
  const essay = await fs.readFile(
    "node_modules/llamaindex/examples/abramov.txt",
    "utf-8",
  );

  const document = new Document({ text: essay });
  const serviceContext = serviceContextFromDefaults({ chunkSize: 512 });
  const index = await VectorStoreIndex.fromDocuments([document], {
    serviceContext,
  });
  const retriever = index.asRetriever();
  retriever.similarityTopK = 5;
  const chatEngine = new ContextChatEngine({ retriever });
  const rl = readline.createInterface({ input, output });

  while (true) {
    const query = await rl.question("Query: ");
    const stream = await chatEngine.chat({ message: query, stream: true });

    for await (const chunk of stream) {
      process.stdout.write(chunk.response);
    }
  }
}

runChatEngine().catch(console.error);