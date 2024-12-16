import { IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateSongDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({
    each: true,
  })
  readonly artist: string;

  @IsOptional()
  @IsString()
  readonly album: string;

  @IsNotEmpty()
  @IsDateString()
  readonly releaseDate: Date;

  @IsNotEmpty()
  @IsMilitaryTime()
  readonly duration: number;
}
