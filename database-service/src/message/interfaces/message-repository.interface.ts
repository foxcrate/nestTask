import { UserReturnDto } from 'src/user/dtos/user-return.dto';
import { MessageCreateDto } from '../dtos/message-create.dto';
import { MessageReturnDto } from '../dtos/message-return.dto';
import { RoomReturnDto } from 'src/room/dtos/room-return.dto';

// user.repository.interface.ts
export interface MessageRepositoryInterface {
  // constructor();
  findAllRoomMessages(
    room_id: number,
    page: number,
    limit: number,
  ): Promise<{
    messages: MessageReturnDto[];
    total: number;
    page: number;
    limit: number;
  }>;
  findById(id: number): Promise<MessageReturnDto>;
  create(
    message: MessageCreateDto,
    user: UserReturnDto,
    theRoom: RoomReturnDto,
  ): Promise<MessageReturnDto>;
}
