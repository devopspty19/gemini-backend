import { Body, Controller, Get, Post } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { BasicPromptDto } from './dtos/basic-prompt.dto';

@Controller('gemini')
export class GeminiController {
  constructor(private readonly geminiService: GeminiService) {}

  @Get()
  getHelloWorld(): string {
    return 'Hola Mundo';
  }

  @Post('basic-prompt')
  basicPrompt(@Body() basicPromptDTO: BasicPromptDto) {
    return this.geminiService.basicPrompt(basicPromptDTO);
  }
}
