import { Module, NestModule, RequestMethod } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SongsModule } from "./songs/songs.module";
import { MiddlewareConsumer } from "@nestjs/common";
import { LoggerMiddleware } from "./middlewares/logger.middleware";
import { DevConfig } from './common/providers/dev-config/dev-config';

@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: DevConfig,
    useClass: DevConfig
  }, {
    provide: "CONFIG",
    useFactory: () => process.env.NODE_ENV === "development" ? "dev" : "prod"
  }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes({path: "songs", method: RequestMethod.GET});
  }
}
