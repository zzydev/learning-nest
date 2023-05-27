import { Controller, Get, Param, Query } from '@nestjs/common';
import { Demo01Service } from './demo01.service';
import { Demo02Controller } from '../demo02/demo02.controller';

@Controller('api/demo01')
export class Demo01Controller {
  constructor(private readonly demo01Service: Demo01Service) {}
  @Get(':id1/:id2')
  getDemo(@Param('id1') id1: string, @Param('id2') id2: string): string {
    return this.demo01Service.getDemo01(id1, id2);
  }

  @Get('find')
  query(@Query('name') name: string, @Query('age') age: number) {
    return `received: name=${name},age=${age}`;
  }
}
