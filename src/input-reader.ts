import { createInterface } from "readline";

const cmd = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = async (prompt: string) => {
  return new Promise((resolve) => {
    cmd.question(prompt, resolve);
  });
};

export const getUserInput = async () => {
  const inputText = await question("Enter some text: ");
  //cmd.close();
  return inputText;
};

export default {};
