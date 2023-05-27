import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Demo01Module } from './demo01/demo01.module';
import { Demo02Module } from './demo02/demo02.module';

@Module({
  imports: [Demo01Module, Demo02Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
