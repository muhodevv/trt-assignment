import { Controller, Get, Param } from '@nestjs/common';
import { ProxyService } from './proxy.service';

@Controller('api/v1/proxy-content')
export class ProxyController {
  constructor(private readonly proxyService: ProxyService) {}

  @Get(':lang')
  async getProxy(@Param('lang') lang: string) {
    return this.proxyService.get(lang);
  }
}
