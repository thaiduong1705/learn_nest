import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class NotFoundMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    res.status(404).send({
      message: `Route ${req.method} ${req.originalUrl} not found`,
    });
  }
}