import { Body, Controller, Post, BadRequestException } from '@nestjs/common';
import { TranslateService } from './translate.service';
import { API_URL_MAPPER } from 'src/constants';

@Controller('api/v1/translate')
export class TranslateController {
  constructor(private readonly translateService: TranslateService) {}

  @Post()
  async translate(@Body() body: { targetLangs: string[] }) {
    if (body.targetLangs.length > 3) {
      throw new BadRequestException('You can only translate to 3 languages');
    }

    if (body.targetLangs.length === 0) {
      throw new BadRequestException('You must provide at least one language');
    }

    if (body.targetLangs.some((lang) => !API_URL_MAPPER[lang])) {
      throw new BadRequestException('Invalid language');
    }

    return this.translateService.translate(body.targetLangs);
  }
}
