import { Injectable } from '@nestjs/common';
import { UserCreateDto } from 'src/user/dtos/user-create.dto';
import { UserReturnDto } from 'src/user/dtos/user-return.dto';
import { UserPostgreRepository } from 'src/user/user-postgre.repository';

@Injectable()
export class DatabaseService {
  // constructor(private readonly userPostgreRepository: UserPostgreRepository) {}
  // async findAllUsers(): Promise<UserReturnDto[]> {
  //   return await this.userPostgreRepository.findAll();
  // }
  // async createUser(data: UserCreateDto): Promise<UserReturnDto> {
  //   return await this.userPostgreRepository.create(data);
  // }
}
