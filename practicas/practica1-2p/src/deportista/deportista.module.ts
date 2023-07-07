import { Module } from '@nestjs/common';
import { DeportistaController } from './deportista.controller';
import { DeportistaService } from './deportista.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deportista } from './deportista.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Deportista])],
  controllers: [DeportistaController],
  providers: [DeportistaService],
})
export class DeportistaModule {}
