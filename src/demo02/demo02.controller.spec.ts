import { Test, TestingModule } from '@nestjs/testing';
import { Demo02Controller } from './demo02.controller';
import { Demo02Service } from './demo02.service';

describe('Demo02Controller', () => {
  let controller: Demo02Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Demo02Controller],
      providers: [Demo02Service],
    }).compile();

    controller = module.get<Demo02Controller>(Demo02Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
