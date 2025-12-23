import { BasicPromptDto } from '../dtos/basic-prompt.dto';
import { GoogleGenAI } from '@google/genai';

interface Options {
  model?: string;
}

export const basicPromptUseCase = async (
  ai: GoogleGenAI,
  basicPromptDTO: BasicPromptDto,
  Options?: Options,
) => {
  const model = Options?.model ?? 'gemini-2.5-flash';
  const response = await ai.models.generateContent({
    model: model,
    contents: basicPromptDTO.prompt,
    config: {
      systemInstruction: 'Responde únicamente en español, en formato markdown.',
    },
  });
  console.log(response.text);
  return response.text;
};
