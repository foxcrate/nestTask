import { Controller } from '@nestjs/common';
import { DatabaseService } from './database.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RedisContext,
} from '@nestjs/microservices';

@Controller('database')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  // @MessagePattern({ cmd: 'database_service.get_users' })
  // async getUsers(@Payload() data: any, @Ctx() context: RedisContext) {
  // console.log(`Channel: ${context.getChannel()}`);
  // console.log('data in user microservice', data);
  //   console.log('I am database controller');
  //   return await this.databaseService.findAllUsers();
  // }
}
