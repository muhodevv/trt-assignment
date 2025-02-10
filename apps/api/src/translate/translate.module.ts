import { Module } from '@nestjs/common';
import { TranslateService } from './translate.service';
import { TranslateController } from './translate.controller';
import { HttpModule } from '@nestjs/axios';
import { ContentModule } from 'src/content/content.module';
@Module({
  providers: [TranslateService],
  controllers: [TranslateController],
  imports: [HttpModule, ContentModule],
})
export class TranslateModule {}
