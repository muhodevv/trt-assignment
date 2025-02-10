import { Injectable, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { API_URL_MAPPER } from '../constants';
import { firstValueFrom } from 'rxjs';
@Injectable()
export class ProxyService {
  constructor(private readonly httpService: HttpService) {}

  async get(lang: string) {
    const url = API_URL_MAPPER[lang];

    if (!url) {
      throw new NotFoundException('Language not found');
    }

    const response = await firstValueFrom(
      this.httpService.get(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    );

    return response.data;
  }
}
