import {
  Body,
  Controller,
  Post,
  Get,
  ParseUUIDPipe,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { DeportistaService } from './deportista.service';
import { CreateDeportistaDto } from './dto/create-deportista.dto';
import { UpdateDeportistaDto } from './dto/update-deportista.dto';

@Controller('deportista')
export class DeportistaController {
  constructor(private readonly deportistaService: DeportistaService) {}

  @Post()
  create(@Body() createDeportistaDto: CreateDeportistaDto) {
    return this.deportistaService.create(createDeportistaDto);
  }

  @Get()
  findAll() {
    return this.deportistaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.deportistaService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateDeportistaDto: UpdateDeportistaDto,
  ) {
    return this.deportistaService.update(id, updateDeportistaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.deportistaService.remove(id);
  }
}
