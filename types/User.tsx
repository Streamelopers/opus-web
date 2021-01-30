export interface User {
  Id: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt?: null;
  IsActive: boolean;
  Name: string;
  Email: string;
  Password: string;
}
