import { Module } from '@nestjs/common';
import { ProxyService } from './proxy.service';
import { ProxyController } from './proxy.controller';
import { HttpModule } from '@nestjs/axios';
@Module({
  providers: [ProxyService],
  controllers: [ProxyController],
  imports: [HttpModule],
})
export class ProxyModule {}
