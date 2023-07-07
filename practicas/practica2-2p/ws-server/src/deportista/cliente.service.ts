import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateDeportistaDto } from './dto/create-deportista.dto';
import { UpdateDeportistaDto } from './dto/update-deportista.dto';
import { Deportista } from './entities/deportista.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DeportistaService {

  private readonly logger = new Logger('DeportistaService');

  constructor( 
    @InjectRepository(Deportista) 
    private readonly deportistaRepository: Repository<Deportista>,

    ){}

  
  async create(createDeportistaDto: CreateDeportistaDto) {
    try {
      const deportista =  this.deportistaRepository.create(createDeportistaDto);
      await this.deportistaRepository.save(deportista);
      return deportista;
    } catch (error) {
      console.log(error)
      if (error.code==='23505')
        throw new BadRequestException(error.detail)
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado')
    }
    
  }

  findAll() {
    return this.deportistaRepository.find({});
  }

  async findOne(id: string) {
    const deportista= await  this.deportistaRepository.findOneBy ({ id });
    if (!deportista)
      throw new NotFoundException(`Deportista ${id} no encontrado`);
    return deportista;

  }

  async update(id: string, updateDeportistaDto: UpdateDeportistaDto) {
    const deportista = await this.deportistaRepository.preload({
      id: id,
      ...updateDeportistaDto
    });
    if (!deportista) throw new NotFoundException(`Deportista ${id} no encontrado`)

    try {
      await  this.deportistaRepository.save(deportista)
      return deportista;
      
    } catch (error) {
      console.log(error)
    }

  }

  async remove(id: string) {
    const deportista = await this.findOne(id);
    await this.deportistaRepository.remove(deportista);

  }
  prueba():String[]{
    return ['uno','dos','tres'];
  }
}
