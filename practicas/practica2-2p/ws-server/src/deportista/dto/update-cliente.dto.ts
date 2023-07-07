import { PartialType } from '@nestjs/mapped-types';
import { CreateDeportistaDto } from './create-deportista.dto';
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateDeportistaDto extends PartialType(CreateDeportistaDto) {
    @IsBoolean()
    @IsOptional()
    estado?: boolean;
}
