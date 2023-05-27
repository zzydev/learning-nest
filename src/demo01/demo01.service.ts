import { Injectable } from '@nestjs/common';

@Injectable()
export class Demo01Service {
  getDemo01(id1: string, id2: string): string {
    try {
      return `received ${id1} and ${id2}`;
    } catch (e) {
      throw new Error('Method not implemented.');
    }
  }
}
