import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

const writeAction = async (req, res) => {
  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Write a cold message to the person for the specified reason below. Make Sure the message is tailored toward the person's experience and skillset. \n Person: ${req.body.personInput}\nReason: ${req.body.reasonInput}`,
    temperature: 0.5,
    max_tokens: 504,
  });
  const basePromotOutput = baseCompletion.data.choices.pop();
  res.status(200).json({ output: basePromotOutput });
};
