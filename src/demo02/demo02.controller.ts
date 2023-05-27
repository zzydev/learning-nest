import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { Demo02Service } from './demo02.service';
import { CreateDemo02Dto } from './dto/create-demo02.dto';
import { UpdateDemo02Dto } from './dto/update-demo02.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('api/demo02')
export class Demo02Controller {
  constructor(private readonly demo02Service: Demo02Service) {}

  @Post()
  create(@Body() createDemo02Dto: CreateDemo02Dto) {
    return this.demo02Service.create(createDemo02Dto);
  }

  @Post('file')
  @UseInterceptors(AnyFilesInterceptor())
  body(
    @Body() createDemo02Dto: CreateDemo02Dto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    console.log(files);
    return this.demo02Service.body(createDemo02Dto);
  }

  @Get()
  findAll() {
    return this.demo02Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demo02Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDemo02Dto: UpdateDemo02Dto) {
    return this.demo02Service.update(+id, updateDemo02Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demo02Service.remove(+id);
  }
}
