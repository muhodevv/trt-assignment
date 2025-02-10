import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { API_URL_MAPPER } from '../constants';
import { UnifiedContent } from './interfaces/content.interface';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ContentService {
  constructor(private readonly httpService: HttpService) {}

  async getUnifiedContent(filter?: {
    language?: string | string[];
    limit?: number;
  }): Promise<{
    results: UnifiedContent[];
    total: number;
  }> {
    const contentPromises = Object.entries(API_URL_MAPPER)
      .filter(([language]) => {
        if (filter?.language && Array.isArray(filter.language)) {
          return filter.language.includes(language);
        }
        if (filter?.language && typeof filter.language === 'string') {
          return language === filter.language;
        }
        return true;
      })

      .map(async ([language, url]) => {
        try {
          const { data } = await firstValueFrom(this.httpService.get(url));

          return this.transformContent(data, language);
        } catch (error) {
          console.error(
            `Error fetching content for ${language}:`,
            error.message,
          );
          return [];
        }
      });

    const results = await Promise.all(contentPromises);

    const limitValue = Math.min(filter?.limit || 150, 150);

    const resultsArr = results
      .flat()
      .sort(
        (a, b) =>
          new Date(b.published_date).getTime() -
          new Date(a.published_date).getTime(),
      )
      .slice(0, limitValue);

    return {
      results: resultsArr,
      total: resultsArr.length,
    };
  }

  private transformContent(data: any, language: string): UnifiedContent[] {
    if (!data || Array.isArray(data) || typeof data !== 'object') {
      return [];
    }

    const unifiedContent: UnifiedContent[] = [];

    const keys = Object.keys(data);

    for (const key of keys) {
      const content = data[key];

      if (key === 'metadata') {
        continue;
      }

      if (!Array.isArray(content)) {
        continue;
      }

      if (content.length === 0) {
        continue;
      }

      for (const item of content) {
        switch (item.type) {
          case 'article':
            unifiedContent.push(this.transformArticle(item, language, key));
            break;
          case 'video':
            unifiedContent.push(this.transformVideo(item, language, key));

            break;
          case 'infographie':
            unifiedContent.push(this.transformInfographie(item, language, key));
            break;
        }
      }
    }

    return unifiedContent;
  }

  private transformArticle(
    content: any,
    language: string,
    section: string,
  ): UnifiedContent {
    return {
      id: content?.id,
      type: content?.type,
      title: content?.title,
      description: content?.description || '',
      path: content?.path,
      published_date: content?.published_date,
      authors: this.transformAuthors(content?.authors),
      image: content?.mainImageUrl,
      language,
      section,
    };
  }

  private transformVideo(
    content: any,
    language: string,
    section: string,
  ): UnifiedContent {
    return {
      id: content?.id,
      type: content?.type,
      title: content?.title,
      description: content?.description || '',
      path: content?.path,
      published_date: content?.published_date,
      authors: this.transformAuthors(content?.authors),
      image: content?.mainImageUrl,
      language,
      section,
    };
  }

  private transformInfographie(
    content: any,
    language: string,
    section,
  ): UnifiedContent {
    return {
      id: content?.id,
      type: content?.type,
      title: content?.title,
      description: content?.description || '',
      path: content?.path,
      published_date: content?.published?.date,
      authors: this.transformAuthors([]),
      image: content?.fields?.mainImage?.[0]?.url,
      language,
      section,
    };
  }

  private transformAuthors(
    authors: any[],
  ): { firstname: string; lastname: string }[] {
    if (!Array.isArray(authors)) {
      return [];
    }

    return authors.map((author) => ({
      firstname: author.firstName || '',
      lastname: author.lastName || '',
      image: author.mainImage || '',
    }));
  }
}
