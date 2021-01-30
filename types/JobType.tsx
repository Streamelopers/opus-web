export interface JobType {
  Id: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt?: null;
  IsActive: boolean;
  Name: string;
}

export enum JobTypeName {
  FULL_TIME = 1,
  PART_TIME,
  FREELANCE,
  TEMPORARY,
  INTERNSHIPS,
  REMOTO
}
