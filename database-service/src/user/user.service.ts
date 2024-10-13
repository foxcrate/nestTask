import { Injectable } from '@nestjs/common';
import { UserPostgreRepository } from './user-postgre.repository';
import { UserReturnDto } from './dtos/user-return.dto';
import { UserCreateDto } from './dtos/user-create.dto';

@Injectable()
export class UserService {
  constructor(private readonly userPostgreRepository: UserPostgreRepository) {}

  async findAllUsers(): Promise<UserReturnDto[]> {
    return await this.userPostgreRepository.findAll();
  }

  async createUser(data: UserCreateDto): Promise<UserReturnDto> {
    return await this.userPostgreRepository.create(data);
  }

  async findByEmail(email: string): Promise<any> {
    // console.log('user service find by email');
    return await this.userPostgreRepository.findByEmail(email);

    // console.log('x', x.email);
    // return true;
  }

  async findById(id: number): Promise<UserReturnDto> {
    // console.log('user service find by id');
    return await this.userPostgreRepository.findById(id);

    // console.log('x', x.email);
    // return true;
  }
}
