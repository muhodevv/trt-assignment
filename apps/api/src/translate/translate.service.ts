import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ContentService } from 'src/content/content.service';
import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai';
@Injectable()
export class TranslateService {
  private gemini: GoogleGenerativeAI;
  constructor(
    private readonly contentService: ContentService,
    private readonly configService: ConfigService,
  ) {
    this.gemini = new GoogleGenerativeAI(
      this.configService.get<string>('GEMINI_API_KEY'),
    );
  }

  JSONParse(response: string) {
    try {
      return JSON.parse(response);
    } catch {
      return null;
    }
  }

  async translateWithAI(content: { title: string; description: string }) {
    const responseSchema = {
      description: 'The response should be in JSON format',
      type: SchemaType.OBJECT,
      properties: {
        title: { type: SchemaType.STRING, nullable: false },
        description: { type: SchemaType.STRING, nullable: false },
      },
      required: ['title', 'description'],
    };

    const model = this.gemini.getGenerativeModel({
      model: 'gemini-1.5-flash',
      generationConfig: {
        responseMimeType: 'application/json',
        responseSchema: responseSchema,
      },
    });

    const PROMPT = `You're a translator. You're given a title and a description. You need to translate the title and the description to the English language.
    You need to return the title and the description in the English language as a JSON object. Keep the original meaning and the original structure of the text.
    
    Content: 
    Title: ${content.title}
    Description: ${content.description}
    
    Response with the following format:
    {
        "title": "string",
        "description": "string"
    }`;

    const result = await model.generateContent(PROMPT);

    return result.response.text();
  }

  async translate(targetLangs: string[]) {
    const contents = await this.contentService.getUnifiedContent({
      language: targetLangs,
      limit: 10, // We limit the number of contents to 10 to avoid rate limit for the AI
    });

    const translatedContents = [];

    for (const content of contents.results) {
      console.log('Translating content', content.title);
      const translatedContent = await this.translateWithAI(content);
      translatedContents.push(translatedContent);
    }

    return contents.results.map((content, index) => {
      const translatedContent: any = this.JSONParse(translatedContents[index]);

      return {
        source_id: content.id,
        source_language: content.language,
        source_title: content.title,
        source_description: content.description,
        source_path: content.path,
        translated_title: translatedContent?.title,
        translated_description: translatedContent?.description,
      };
    });
  }
}
