import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentModule } from './content/content.module';
import { ProxyModule } from './proxy/proxy.module';
import { TranslateModule } from './translate/translate.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ContentModule,
    ProxyModule,
    TranslateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
