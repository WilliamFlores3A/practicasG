import {
  IsString,
  MinLength,
  IsInt,
  IsPositive,
  IsNotEmpty,
} from 'class-validator';

export class CreateDeportistaDto {
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  identificacion: number;
}
