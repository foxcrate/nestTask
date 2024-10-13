import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UserUpdateDto {
  id: number;

  name: string;

  email: string;

  password: string;

  age: number;
}
