import { Module } from '@nestjs/common';
import { DeportistaService } from './deportista.service';
import { DeportistaController } from './deportista.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deportista } from './entities/deportista.entity';

@Module({
  controllers: [DeportistaController],
  providers: [DeportistaService],
  imports:[ TypeOrmModule.forFeature([
    Deportista
  ]) ],
  exports:[ DeportistaService, TypeOrmModule ]
})
export class DeportistaModule {}
