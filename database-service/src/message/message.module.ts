import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { MessageEntity } from './message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessagePostgreRepository } from './message-postgre.repository';
import { UserModule } from 'src/user/user.module';
import { RoomModule } from 'src/room/room.module';

@Module({
  providers: [MessageService, MessagePostgreRepository],
  controllers: [MessageController],
  imports: [TypeOrmModule.forFeature([MessageEntity]), UserModule, RoomModule],
})
export class MessageModule {}
