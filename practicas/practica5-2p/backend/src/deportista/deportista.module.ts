import { Module } from '@nestjs/common';
import { DeportistaController } from './deportista.controller';
import { DeportistaService } from './deportista.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deportista } from './deportista.entity';

@Module({
  controllers: [DeportistaController],
  imports: [TypeOrmModule.forFeature([Deportista])],
  providers: [DeportistaService],
  exports: [DeportistaService, TypeOrmModule],
})
export class DeportistaModule {}
