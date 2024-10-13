// user.repository.ts
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserRepositoryInterface } from './interfaces/user-repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { UserReturnDto } from './dtos/user-return.dto';
import { UserCreateDto } from './dtos/user-create.dto';
import { UserUpdateDto } from './dtos/user-update.dto';

@Injectable()
// @InjectRepository(UserEntity)
export class UserPostgreRepository implements UserRepositoryInterface {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userEntity: Repository<UserEntity>,
  ) {}
  async findAll(): Promise<UserReturnDto[]> {
    return await this.userEntity.find();
  }

  async findById(id: number): Promise<UserReturnDto> {
    return await this.userEntity.findOne({ where: { id: id } });
  }

  async findByEmail(email: string): Promise<UserReturnDto> {
    // console.log('user repo find by email');
    return await this.userEntity.findOne({ where: { email: email } });
  }

  async create(user: UserCreateDto): Promise<UserReturnDto> {
    // console.log('create', user);

    const newUser = await this.userEntity.create(user);
    return await this.userEntity.save(newUser);
  }

  async update(id: number, user: UserUpdateDto): Promise<UserReturnDto> {
    await this.userEntity.update(id, user);
    return this.userEntity.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.delete(id);
  }
}
