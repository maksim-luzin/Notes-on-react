interface IPayloadUpdate {
  id: string;
  category?: string;
  name?: string;
  content?: string;
  created?: Date;
  status?: string;
}

export type { IPayloadUpdate };
