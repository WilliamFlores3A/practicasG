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
  description: string;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  price: number;
}
