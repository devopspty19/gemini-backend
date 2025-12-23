import { Injectable } from '@nestjs/common';
import { BasicPromptDto } from './dtos/basic-prompt.dto';
import { GoogleGenAI } from '@google/genai';
import { basicPromptUseCase } from './use-cases/basic-prompt.use-case';

@Injectable()
export class GeminiService {
  private ai = new GoogleGenAI({});

  async basicPrompt(basicPromptDTO: BasicPromptDto) {
    // The client gets the API key from the environment variable `GEMINI_API_KEY`.
    return await basicPromptUseCase(this.ai, basicPromptDTO);
  }
}
