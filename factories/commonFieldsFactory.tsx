import faker from "faker";

interface CommonFields {
  Id?: number;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  DeletedAt?: Date | null;
  IsActive?: boolean;
}
export default (override?: CommonFields) => {
  return {
    Id: faker.random.number(250),
    CreatedAt: faker.date.past(),
    UpdatedAt: faker.date.recent(),
    DeletedAt: null,
    IsActive: true,
    ...override
  };
};
