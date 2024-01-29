import { getUserInput } from "./input-reader";

export const executeChatbot = async () => {
  console.log("-----------------------------------------------------");
  const inputText = await getUserInput();
  console.log("text input: ", inputText);
  const inputText2 = await getUserInput();
  console.log("text input: ", inputText2);
  
};

export default {};
