import { Injectable } from '@nestjs/common';

@Injectable()
export class DevConfig {
  DBHOST = 'localhost';
  getDBHOST(): string {
    return this.DBHOST;
  }
}
