import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RedisContext,
} from '@nestjs/microservices';
import { RoomService } from './room.service';
import { RoomReturnDto } from './dtos/room-return.dto';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @MessagePattern({ cmd: 'database_service.get_room_info' })
  async getRoomInfo(
    @Payload()
    data: { room_id: number },
    @Ctx() context: RedisContext,
  ): Promise<RoomReturnDto> {
    console.log('I am database controller');
    return await this.roomService.findById(data.room_id);
  }

  @MessagePattern({ cmd: 'database_service.get_all_rooms' })
  async getAllRooms(
    @Payload()
    data: { room_id: number },
    @Ctx() context: RedisContext,
  ): Promise<RoomReturnDto[]> {
    console.log('I am database controller');
    return await this.roomService.getAll();
  }

  @MessagePattern({ cmd: 'database_service.save_new_room' })
  async saveNewRoom(
    @Payload()
    data: { name: string },
    @Ctx() context: RedisContext,
  ): Promise<RoomReturnDto> {
    console.log('I am database controller');
    console.log('data', data);

    return await this.roomService.create(data);
  }
}
