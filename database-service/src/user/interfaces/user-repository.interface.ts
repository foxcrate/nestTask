import { UserCreateDto } from '../dtos/user-create.dto';
import { UserReturnDto } from '../dtos/user-return.dto';
import { UserUpdateDto } from '../dtos/user-update.dto';

// user.repository.interface.ts
export interface UserRepositoryInterface {
  // constructor();
  findAll(): Promise<UserReturnDto[]>;
  findById(id: number): Promise<UserReturnDto>;
  findByEmail(email: string): Promise<UserReturnDto>;
  create(user: UserCreateDto): Promise<UserReturnDto>;
  update(id: number, user: UserUpdateDto): Promise<UserReturnDto>;
  delete(id: number): Promise<void>;
}
