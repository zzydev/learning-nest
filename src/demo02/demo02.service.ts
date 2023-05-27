import { Injectable } from '@nestjs/common';
import { CreateDemo02Dto } from './dto/create-demo02.dto';
import { UpdateDemo02Dto } from './dto/update-demo02.dto';

@Injectable()
export class Demo02Service {
  body(createDemo02Dto: CreateDemo02Dto) {
    return `received: ${JSON.stringify(createDemo02Dto)}`;
  }
  create(createDemo02Dto: CreateDemo02Dto) {
    return `received: ${JSON.stringify(createDemo02Dto)}`;
  }

  findAll() {
    return `This action returns all demo02`;
  }

  findOne(id: number) {
    return `This action returns a #${id} demo02`;
  }

  update(id: number, updateDemo02Dto: UpdateDemo02Dto) {
    return `This action updates a #${id} demo02`;
  }

  remove(id: number) {
    return `This action removes a #${id} demo02`;
  }
}
