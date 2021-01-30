export interface Company {
  Id: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt?: null;
  IsActive: boolean;
  Name: string;
  Website: string;
  Description: string;
  UserId: number;
  Picture: string;
}
