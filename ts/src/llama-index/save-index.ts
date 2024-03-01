import fs from "fs/promises";
import {
  Document,
  storageContextFromDefaults,
  VectorStoreIndex,
} from "llamaindex";

export async function saveIndex() {
  const essay = await fs.readFile(
    "node_modules/llamaindex/examples/abramov.txt",
    "utf-8",
  );

  // Create Document object with essay
  const document = new Document({ text: essay, id_: "essay" });

  // Split text and create embeddings. Store them in a VectorStoreIndex
  // persist the vector store automatically with the storage context
  const storageContext = await storageContextFromDefaults({
    persistDir: "./storage",
  });
  const index = await VectorStoreIndex.fromDocuments([document], {
    storageContext,
  });

  // Query the index
  const queryEngine = index.asQueryEngine();
  const response = await queryEngine.query({
    query: "What did the author do in college?",
  });

  // Output response
  console.log("1: ",response.toString());

  // load the index
  const secondStorageContext = await storageContextFromDefaults({
    persistDir: "./storage",
  }); 
  const loadedIndex = await VectorStoreIndex.init({
    storageContext: secondStorageContext,
  });
  const loadedQueryEngine = loadedIndex.asQueryEngine();
  const loadedResponse = await loadedQueryEngine.query({
    query: "What did the author do growing up?",
  });
  console.log("2: ",loadedResponse.toString());
}
