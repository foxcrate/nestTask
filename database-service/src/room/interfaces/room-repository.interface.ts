import { RoomReturnDto } from '../dtos/room-return.dto';
import { RoomCreateDto } from '../dtos/room-create.dto';

// user.repository.interface.ts
export interface RoomRepositoryInterface {
  // constructor();
  findAll(): Promise<RoomReturnDto[]>;
  findById(id: number): Promise<RoomReturnDto>;
  findByName(name: string): Promise<RoomReturnDto>;
  create(room: RoomCreateDto): Promise<RoomReturnDto>;
}
