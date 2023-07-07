import { Injectable } from '@nestjs/common';
import {Socket} from 'socket.io'
import { Deportista } from '../deportista/entities/deportista.entity'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DeportistaService } from 'src/deportista/deportista.service';

interface ConnectedClients {
    [id:string]: {
       socket: Socket,
       deportista: Deportista
    }
}

@Injectable()
export class MensajesWsService {
    private connectedClients: ConnectedClients={}

    constructor( @InjectRepository(Deportista)
     private readonly deportistaRepository: Repository<Deportista>,
     private readonly deportistaService: DeportistaService
      ){}

    async registerClient(client:Socket, name: string){
        console.log(this.deportistaService.prueba());
        const deportista =await  this.deportistaRepository.findOneBy({ nombre: name });
        if (!deportista) throw new Error('Deportista no encontrado');
        if (!deportista.estado) throw new Error('No activo');

        
        this.connectedClients[client.id]= {socket:client, deportista: deportista};
    }
    removeClient(clientId:string){
        delete this.connectedClients[clientId];
    }
    getConnectedClients():string[]{
        // return Object.keys(this.connectedClients).length;
        // console.log(this.connectedClients)
         return Object.keys(this.connectedClients);
    }
    getStudentFullName(id:string){
        return this.connectedClients[id].deportista.nombre;
    }
}
