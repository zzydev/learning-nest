import { Module } from '@nestjs/common';
import { Demo01Service } from './demo01.service';
import { Demo01Controller } from './demo01.controller';

@Module({
  providers: [Demo01Service],
  controllers: [Demo01Controller],
})
export class Demo01Module {}
