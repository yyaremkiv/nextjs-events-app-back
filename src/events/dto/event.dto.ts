import { IsNotEmpty, IsString } from 'class-validator';

export class EventDto {
  @IsString()
  readonly eventId?: string;

  @IsNotEmpty()
  @IsString()
  readonly cityId: string;

  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  readonly date: string;

  @IsNotEmpty()
  @IsString()
  readonly seats: string;
}
