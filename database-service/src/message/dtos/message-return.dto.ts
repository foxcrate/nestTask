export class MessageReturnDto {
  id: number;

  roomId?: string;

  userId?: string;

  content: string;

  createdAt: Date;

  updatedAt: Date;
}
