import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from "@nestjs/common";
import { SongsService } from "./songs.service";
import { CreateSongDto } from "./dto/create-song-dto";
import { Connection } from "src/common/connection";
@Controller("songs")
export class SongsController {
  constructor(
    private readonly songsService: SongsService,
    @Inject("CONNECTION") private connection: Connection
  ) {
    console.log(connection);
  }

  @Get()
  @Post()
  findAll(): string {
    return this.songsService.findAll();
  }

  // @Post()
  // @HttpCode(201)
  // create(@Body() createSongDto: CreateSongDto): object {
  //   return this.songsService.create(createSongDto);
  // }

  @Get(":id")
  findOne(@Param("id", new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: number): string {
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
