import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentModule } from './content/content.module';
import { ProxyModule } from './proxy/proxy.module';

@Module({
  imports: [ContentModule, ProxyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
