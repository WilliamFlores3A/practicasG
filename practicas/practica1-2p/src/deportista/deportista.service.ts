import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Deportista } from './deportista.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDeportistaDto } from './dto/create-deportista.dto';
import { UpdateDeportistaDto } from './dto/update-deportista.dto';

@Injectable()
export class DeportistaService {
  private readonly logger = new Logger('DeportistaService');

  constructor(
    @InjectRepository(Deportista)
    private readonly deportistaRepository: Repository<Deportista>,
  ) {}

  async create(createDeportistaDto: CreateDeportistaDto): Promise<Deportista> {
    try {
      const deportista = this.deportistaRepository.create(createDeportistaDto);
      await this.deportistaRepository.save(deportista);
      return deportista;
    } catch (error) {
      console.error(error);
      if (error.code === '23505') throw new BadRequestException(error.detail);
      this.logger.error(error);
      throw new InternalServerErrorException('Error creating deportista');
    }
  }

  async findAll(): Promise<Deportista[]> {
    return await this.deportistaRepository.find({});
  }

  async findOne(id: string): Promise<Deportista> {
    const deportista = await this.deportistaRepository.findOneBy({ id });
    if (!deportista) throw new NotFoundException(`Deportista ${id} not found`);
    return deportista;
  }

  async update(
    id: string,
    updateDeportistaDto: UpdateDeportistaDto,
  ): Promise<Deportista> {
    const deportista = await this.deportistaRepository.preload({
      id: id,
      ...updateDeportistaDto,
    });
    if (!deportista) throw new NotFoundException(`Deportista ${id} not found`);

    try {
      await this.deportistaRepository.save(deportista);
      return deportista;
    } catch (error) {
      console.error(error);
    }
  }

  async remove(id: string): Promise<void> {
    const deportista = await this.findOne(id);
    await this.deportistaRepository.remove(deportista);
  }
}
