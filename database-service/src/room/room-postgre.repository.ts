// user.repository.ts
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomEntity } from './room.entity';
import { RoomRepositoryInterface } from './interfaces/room-repository.interface';
import { RoomReturnDto } from './dtos/room-return.dto';
import { RoomCreateDto } from './dtos/room-create.dto';

@Injectable()
// @InjectRepository(UserEntity)
export class RoomPostgreRepository implements RoomRepositoryInterface {
  constructor(
    @InjectRepository(RoomEntity)
    private readonly roomEntity: Repository<RoomEntity>,
  ) {}

  async findById(id: number): Promise<RoomReturnDto> {
    return await this.roomEntity.findOne({ where: { id: id } });
  }

  async findAll(): Promise<RoomReturnDto[]> {
    return await this.roomEntity.find();
  }

  async findByName(name: string): Promise<RoomReturnDto> {
    return await this.roomEntity.findOne({ where: { name: name } });
  }

  async create(room: RoomCreateDto): Promise<RoomReturnDto> {
    const newRoom = await this.roomEntity.create({
      ...room,
    });
    return await this.roomEntity.save(newRoom);
  }
}
