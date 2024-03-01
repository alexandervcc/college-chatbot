require("dotenv").config();

enum VARS {
  "OPENAI_API_KEY" = "OPENAI_API_KEY",
  "AZURE_OPENAI_API_KEY" = "AZURE_OPENAI_API_KEY",
}

export const ENV: Record<VARS, string> = {
  OPENAI_API_KEY: "",
  AZURE_OPENAI_API_KEY: "",
};

export const loadVariables = async () => {
  ENV["OPENAI_API_KEY"] = process.env.OPENAI_API_KEY || "";
  ENV["AZURE_OPENAI_API_KEY"] = process.env.AZURE_OPENAI_API_KEY || "";
};

export default {};
