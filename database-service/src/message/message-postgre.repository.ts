// user.repository.ts
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageRepositoryInterface } from './interfaces/message-repository.interface';
import { MessageEntity } from './message.entity';
import { MessageReturnDto } from './dtos/message-return.dto';
import { MessageCreateDto } from './dtos/message-create.dto';
import { UserReturnDto } from 'src/user/dtos/user-return.dto';
import { RoomReturnDto } from 'src/room/dtos/room-return.dto';

@Injectable()
// @InjectRepository(UserEntity)
export class MessagePostgreRepository implements MessageRepositoryInterface {
  constructor(
    @InjectRepository(MessageEntity)
    private readonly messageEntity: Repository<MessageEntity>,
  ) {}
  async findAllRoomMessages(
    room_id: number,
    page: number = 1,
    limit: number = 20,
  ): Promise<{
    messages: MessageReturnDto[];
    total: number;
    page: number;
    limit: number;
  }> {
    const [messages, total] = await this.messageEntity
      .createQueryBuilder('message')
      .leftJoinAndSelect('message.user', 'user')
      .where('message.roomId = :room_id', { room_id })
      .orderBy('message.createdAt', 'DESC')
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    // console.log('messages', messages);

    return { messages, total, page, limit };
  }

  async findById(id: number): Promise<MessageReturnDto> {
    return await this.messageEntity.findOne({ where: { id: id } });
  }

  async create(
    message: MessageCreateDto,
    theUser: UserReturnDto,
    theRoom: RoomReturnDto,
  ): Promise<MessageReturnDto> {
    // console.log('message', message);

    const newMessage = await this.messageEntity.create({
      ...message,
      user: theUser,
      room: theRoom,
    });
    return await this.messageEntity.save(newMessage);
  }
}
