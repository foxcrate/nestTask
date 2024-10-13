import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RoomPostgreRepository } from './room-postgre.repository';
import { MessageReturnDto } from 'src/message/dtos/message-return.dto';
import { RoomCreateDto } from './dtos/room-create.dto';
import { RoomReturnDto } from './dtos/room-return.dto';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class RoomService {
  constructor(private readonly roomPostgreRepository: RoomPostgreRepository) {}

  async create(data: RoomCreateDto): Promise<RoomReturnDto> {
    let theRoom = await this.findByName(data.name);
    if (theRoom) {
      // repeated car name
      throw new RpcException({
        message: 'Room already exists',
        code: 400,
      });
    }
    return await this.roomPostgreRepository.create(data);
  }

  async findById(id: number): Promise<RoomReturnDto> {
    return await this.roomPostgreRepository.findById(id);
  }

  async getAll(): Promise<RoomReturnDto[]> {
    return await this.roomPostgreRepository.findAll();
  }

  async findByName(name: string): Promise<RoomReturnDto> {
    return await this.roomPostgreRepository.findByName(name);
  }
}
