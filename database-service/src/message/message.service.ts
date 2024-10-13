import { Injectable } from '@nestjs/common';
import { MessagePostgreRepository } from './message-postgre.repository';
import { MessageReturnDto } from './dtos/message-return.dto';
import { MessageCreateDto } from './dtos/message-create.dto';
import { UserService } from 'src/user/user.service';
import { RoomService } from 'src/room/room.service';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class MessageService {
  constructor(
    private readonly messagePostgreRepository: MessagePostgreRepository,
    private readonly userService: UserService,
    private readonly roomService: RoomService,
  ) {}

  async findAllRoomMessages(
    room_id: number,
    page: number,
    limit: number,
  ): Promise<{
    messages: MessageReturnDto[];
    total: number;
    page: number;
    limit: number;
  }> {
    let theRoom = await this.roomService.findById(room_id);
    if (!theRoom) {
      throw new RpcException({
        message: 'Room not found',
        code: 400,
      });
    }
    return await this.messagePostgreRepository.findAllRoomMessages(
      room_id,
      page,
      limit,
    );
  }

  async create(data: MessageCreateDto): Promise<MessageReturnDto> {
    let theUser = await this.userService.findById(data.userId);
    let theRoom = await this.roomService.findById(data.roomId);
    return await this.messagePostgreRepository.create(data, theUser, theRoom);
  }

  async findById(id: number): Promise<MessageReturnDto> {
    return await this.messagePostgreRepository.findById(id);
  }
}
