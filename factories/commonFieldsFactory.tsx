import faker from "faker/locale/es_MX";

interface CommonFields {
  Id?: number;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  DeletedAt?: Date | null;
  IsActive?: boolean;
}
export default (override?: CommonFields) => {
  return {
    Id: faker.datatype.number(250),
    CreatedAt: faker.date.past(),
    UpdatedAt: faker.date.recent(),
    DeletedAt: null,
    IsActive: true,
    ...override
  };
};
