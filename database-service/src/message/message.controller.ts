import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RedisContext,
} from '@nestjs/microservices';
import { MessageService } from './message.service';
import { MessageCreateDto } from './dtos/message-create.dto';
import { MessageReturnDto } from './dtos/message-return.dto';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @MessagePattern({ cmd: 'database_service.get_room_messages' })
  async getRoomMessages(
    @Payload()
    data: { room_id: number; page: number; limit: number },
    @Ctx() context: RedisContext,
  ): Promise<{
    messages: MessageReturnDto[];
    total: number;
    page: number;
    limit: number;
  }> {
    console.log('I am database controller');
    console.log('database_service.get_room_messages');

    return await this.messageService.findAllRoomMessages(
      data.room_id,
      data.page,
      data.limit,
    );
  }

  @MessagePattern({ cmd: 'database_service.save_new_message' })
  async saveNewMessage(
    @Payload() data: MessageCreateDto,
    @Ctx() context: RedisContext,
  ) {
    // console.log('I am database controller');

    // console.log('data.new_message', data);
    return await this.messageService.create(data);
  }
}
