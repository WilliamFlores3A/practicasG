import { Socket } from 'socket.io';
import { Deportista } from '../deportista/deportista.entity';

export interface Clients {
  [id: string]: {
    socket: Socket;
    user: Deportista;
  };
}
