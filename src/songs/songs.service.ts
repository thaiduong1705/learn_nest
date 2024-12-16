import { Injectable } from "@nestjs/common";
import { CreateSongDto } from "./dto/create-song-dto";

@Injectable()
export class SongsService {
  findAll(): string {
    return "This action returns all songs";
  }

  findOne(id: number): string {
    return `This action returns a #${id} song`;
  }

  create(createSongDto: CreateSongDto): object {
    return createSongDto;
  }

  update(id: string): string {
    return "This action updates a song with id " + id;
  }

  remove(id: string): string {
    return "This action removes a song with id " + id;
  }
}
