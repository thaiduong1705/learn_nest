import { Injectable } from "@nestjs/common";

@Injectable()
export class SongsService {
  findAll(): string {
    return "This action returns all songs";
  }

  findOne(id: string): string {
    return `This action returns a #${id} song`;
  }

  create(id: string): string {
    return "This action creates a new song with id " + id;
  }

  update(id: string): string {
    return "This action updates a song with id " + id;
  }

  remove(id: string): string {
    return "This action removes a song with id " + id;
  }
}
