import { Company } from "./Company";
import { Currency } from "./Currency";
import { JobType } from "./JobType";
import { Location } from "./Location";
import { Level } from "./Level";
import { PaymentType } from "./PaymentType";
import { User } from "./User";

export interface Job {
  Id: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt?: null;
  IsActive: boolean;
  LocationId: number;
  Location: Location;
  CompanyId: number;
  Company: Company;
  Title: string;
  UserId: number;
  User: User;
  CurrencyId?: number;
  Currency?: Currency;
  PaymentTypeId?: number;
  PaymentType?: PaymentType;
  JobTypeId: number;
  JobType: JobType;
  LevelId: number;
  Level: Level;
  Description: string;
  HowToApply: string;
  MinSalary?: number;
  MaxSalary?: number;
  IsRemote: boolean;
  IsRemoteOnly: boolean;
}
