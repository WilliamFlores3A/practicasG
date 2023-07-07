import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { ChatService } from './chat.service';
import { DeportistaModule } from '../deportista/deportista.module';
import { DeportistaController } from 'src/deportista/deportista.controller';

@Module({
  providers: [ChatGateway, ChatService],
  imports: [DeportistaModule],
})
export class ChatModule {}
