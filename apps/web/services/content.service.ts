import { api } from '@/lib/axios';
import { ContentResponse } from '@/types/content';

interface GetContentsParams {
  language?: string;
  category?: string;
  page?: number;
  limit?: number;
}

export class ContentService {
  static async getContents(params: GetContentsParams = { language: 'fr' }): Promise<ContentResponse> {
    const { data } = await api.get<ContentResponse>('/api/v1/content', {
      params: {
        language: params.language,
      },
    });
    return data;
  }
} 