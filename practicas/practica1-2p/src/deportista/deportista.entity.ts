import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Deportista {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  description: string;

  @Column('decimal', { default: 0 })
  price: number;
}
