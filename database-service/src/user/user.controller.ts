import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RedisContext,
} from '@nestjs/microservices';
import { UserService } from './user.service';
import { UserSignUpDto } from './dtos/user-signup.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: 'database_service.get_users' })
  async getUsers(@Payload() data: any, @Ctx() context: RedisContext) {
    console.log('I am database controller');
    return await this.userService.findAllUsers();
  }

  @MessagePattern({ cmd: 'database_service.get_user_by_email' })
  async getUserByEmail(
    @Payload() data: { email: string },
    @Ctx() context: RedisContext,
  ) {
    // console.log('I am database controller, get user by email');

    return await this.userService.findByEmail(data.email);
  }

  @MessagePattern({ cmd: 'database_service.get_user_by_id' })
  async getUserById(
    @Payload() data: { id: number },
    @Ctx() context: RedisContext,
  ) {
    // console.log('I am database controller, get user by email');

    return await this.userService.findById(data.id);
  }

  @MessagePattern({ cmd: 'database_service.save_new_user' })
  async saveUser(
    @Payload() data: { signup_user: UserSignUpDto },
    @Ctx() context: RedisContext,
  ) {
    // console.log('I am database controller');

    // console.log('saveUser', data.signup_user);
    return await this.userService.createUser(data.signup_user);
  }
}
