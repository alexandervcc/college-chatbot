import { createInterface } from "readline";

const cmd = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const question = async (prompt: string): Promise<string> => {
  return new Promise((resolve) => {
    cmd.question(prompt, resolve);
  });
};

export const getUserInput = async (): Promise<string> => {
  const inputText = await question("???: ");
  return inputText.toString();
};

export default {};
