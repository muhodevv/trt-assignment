import { Controller, Get, Query } from '@nestjs/common';
import { ContentService } from './content.service';
import { UnifiedContent } from './interfaces/content.interface';

@Controller('api/v1/content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get()
  async getUnifiedContent(@Query('language') language?: string): Promise<{
    results: UnifiedContent[];
    total: number;
  }> {
    return this.contentService.getUnifiedContent({ language });
  }
}
