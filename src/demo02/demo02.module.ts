import { Module } from '@nestjs/common';
import { Demo02Service } from './demo02.service';
import { Demo02Controller } from './demo02.controller';

@Module({
  controllers: [Demo02Controller],
  providers: [Demo02Service],
})
export class Demo02Module {}
