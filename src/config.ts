require("dotenv").config();

enum VARS {
  "OPENAI_ORGANIZATION" = "OPENAI_ORGANIZATION",
  "OPENAI_API_KEY" = "OPENAI_API_KEY",
}

export const ENV: Record<VARS, string> = {
  OPENAI_API_KEY: "",
  OPENAI_ORGANIZATION: "",
};

export const loadVariables = async () => {
  ENV["OPENAI_API_KEY"] = process.env.OPENAI_API_KEY || "";
  ENV["OPENAI_ORGANIZATION"] = process.env.OPENAI_ORGANIZATION || "";
};

export default {};
