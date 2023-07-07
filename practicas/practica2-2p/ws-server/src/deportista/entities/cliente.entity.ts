import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Deportista {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('varchar',{
        unique:true
    })
    nombre:string;

    @Column('text', {nullable:true})
    cedula:string;

    @Column('varchar',{
        unique:true
    })
    edad:string;

    @Column('boolean', {default:true})
    estado:boolean;


}

