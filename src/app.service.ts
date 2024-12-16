import { Inject, Injectable } from "@nestjs/common";
import { DevConfig } from "./common/providers/dev-config/dev-config";

@Injectable()
export class AppService {
  constructor(private devConfig: DevConfig, @Inject("CONFIG") private configValue: string) {}
  getHello(): string {
    return `Hello from ${this.devConfig.getDBHOST()} and ${this.configValue}`;
  }
}
