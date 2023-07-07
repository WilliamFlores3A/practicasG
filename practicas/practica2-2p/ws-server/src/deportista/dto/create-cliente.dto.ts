import { IsArray, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateDeportistaDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    identificacion:string;

    @IsString()
    @IsNotEmpty()
    nombre:string;

    @IsString()
    @IsNotEmpty()
    cedula:string;
    

    @IsString()
    @IsNotEmpty()
    edad:string;

}
