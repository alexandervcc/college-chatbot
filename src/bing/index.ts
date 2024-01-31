import { CognitiveServicesCredentials } from "ms-rest-azure";
import WebSearchAPIClient from "azure-cognitiveservices-websearch";
import { SearchResponse } from "azure-cognitiveservices-websearch/lib/models";
import { ENV } from "../config";

// Instantiate the client
let credentials: CognitiveServicesCredentials;
let webSearchApiClient: WebSearchAPIClient;

export const loadBing = async () => {
  credentials = new CognitiveServicesCredentials(ENV.AZURE_OPENAI_API_KEY);
  webSearchApiClient = new WebSearchAPIClient(credentials, {
    endpoint: "https://api.bing.microsoft.com",
  });
};

type ResponseTypes = keyof SearchResponse;

// Request
export const makeSearchRequest = async (searchText: string) => {
  try {
    const result = await webSearchApiClient.web.search(searchText);
    console.log("result bing:", result);
    let properties: ResponseTypes[] = ["images", "webPages", "news", "videos"];
    for (const prop of properties) {
      const res = result[prop];
      if (typeof res === "object") {
        if ("value" in res) {
          console.log(res.value);
        }
      } else {
        console.log(`No ${prop} data`);
      }
    }
  } catch (error) {
    console.error("BING ERROR: ", error);
  }
};
