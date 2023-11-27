import { IsString } from 'class-validator';

export class CreateBikeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly type: string;

  @IsString({ each: true })
  readonly colors: string[];
}
