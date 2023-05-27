import { PartialType } from '@nestjs/mapped-types';
import { CreateDemo02Dto } from './create-demo02.dto';

export class UpdateDemo02Dto extends PartialType(CreateDemo02Dto) {}
