import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomEntity } from './room.entity';
import { RoomPostgreRepository } from './room-postgre.repository';

@Module({
  providers: [RoomService, RoomPostgreRepository],
  controllers: [RoomController],
  imports: [TypeOrmModule.forFeature([RoomEntity])],
  exports: [RoomService],
})
export class RoomModule {}
