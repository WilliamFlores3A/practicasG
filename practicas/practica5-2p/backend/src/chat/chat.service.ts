import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { Clients } from './clients.interface';
import { DeportistaService } from '../deportista/deportista.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Deportista } from 'src/deportista/deportista.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChatService {
  private clients: Clients = {};

  constructor(
    @InjectRepository(Deportista)
    private readonly deportistaRepository: Repository<Deportista>,
    private readonly deportistaService: DeportistaService,
  ) {}

  async registerClient(client: Socket, name: string) {
    console.log('Attempt to login: ', name);
    const deportista = await this.deportistaService.findOneByName(name);
    if (!deportista) throw new Error(`Deportista ${name} not found`);
    if (this.findClientByName(name)) {
      console.error(`Deportista ${name} already logged in`);
      throw new Error(`Deportista ${name} already logged in`);
    }

    this.clients[client.id] = { socket: client, user: deportista };
  }

  removeClient(clientId: string) {
    delete this.clients[clientId];
  }

  getClients() {
    return Object.values(this.clients).map((client) => client.user.name);
  }

  getClientName(clientId: string) {
    return this.clients[clientId].user.name;
  }

  private findClientByName(name: string) {
    return Object.values(this.clients).find(
      (client) => client.user.name === name,
    );
  }
}
