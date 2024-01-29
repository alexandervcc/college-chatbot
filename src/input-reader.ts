import { createInterface } from "readline";

const cmd = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = async (prompt: string): Promise<string> => {
  return new Promise((resolve) => {
    cmd.question(prompt, resolve);
  });
};

export const getUserInput = async (): Promise<string> => {
  const inputText = await question("???: ");
  //cmd.close();
  return inputText.toString();
};

export default {};
