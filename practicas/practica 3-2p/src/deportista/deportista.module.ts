import { Module } from '@nestjs/common';
import { DeportistasService } from './deportista.service';
import { DeportistasResolver } from './deportista.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deportista } from './entities/deportista.entity';

@Module({
  providers: [DeportistasResolver, DeportistasService],
  imports:[
    TypeOrmModule.forFeature([Deportista])
  ]
})
export class DeportistasModule {}
