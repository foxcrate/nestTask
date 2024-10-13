import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UserSignUpDto {
  name: string;

  email: string;

  password: string;

  age: number;
}
