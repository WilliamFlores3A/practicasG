import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Deportista {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { unique: true })
  name: string;

  @Column('decimal', { default: 0 })
  identificacion: number;
}
