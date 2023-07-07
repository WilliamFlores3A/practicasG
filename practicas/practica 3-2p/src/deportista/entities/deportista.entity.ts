import { ObjectType, Field, ID} from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'deportista'})
@ObjectType()
export class Deportista {
  
    @PrimaryGeneratedColumn('uuid')
    @Field(()=> ID)
    id:string;
    
    @Column()
    @Field(()=> String)
    identificacion:string;

    @Column()
    @Field(()=>String)
    nombre:string;

    @Column({default:false})
    @Field(()=>Boolean)
    @IsOptional()
    estado:boolean;
}
