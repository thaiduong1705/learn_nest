import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { SongsService } from "./songs.service";
@Controller("songs")
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get()
  findAll(): string {
    return this.songsService.findAll();
  }

  @Post()
  @HttpCode(201)
  create(): string {
    return this.songsService.create("123");
  }

  @Get(":id")
  findOne(@Param("id") id: string): string {
    return this.songsService.findOne(id);
  }

  @Put(":id")
  update(@Param("id") id: string): string {
    return this.songsService.update(id);
  }

  @Delete(":id")
  remove(@Param("id") id: string): string {
    return this.songsService.remove(id);
  }
}
