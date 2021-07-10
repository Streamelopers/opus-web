import faker from "faker/locale/es_MX";
import locationFactory from "./locationFactory";
import companyFactory from "./companyFactory";
import currencyFactory from "./currencyFactory";
import paymentTypeFactory from "./paymentTypeFactory";
import jobTypeFactory from "./jobTypeFactory";
import levelFactory from "./levelFactory";
import userFactory from "./userFactory";
import commonFieldsFactory from "./commonFieldsFactory";

export default () => {
  const jobId = faker.datatype.number({ min: 1, max: 99999999 });
  const jobTypeId: number = faker.datatype.number({ min: 1, max: 5 });
  const locationId: number = faker.datatype.number({ min: 1, max: 99999999 });
  const userId: number = faker.datatype.number({ min: 1, max: 99999999 });
  const companyId: number = faker.datatype.number({ min: 1, max: 99999999 });
  const paymentTypeId: number = faker.datatype.number({ min: 1, max: 2 });
  const levelId: number = faker.datatype.number({ min: 1, max: 6 });
  const currencyId: number = faker.datatype.number({ min: 1, max: 5 });

  return {
    ...commonFieldsFactory({ Id: jobId }),
    LocationId: locationId,
    Location: locationFactory(locationId),
    CompanyId: companyId,
    Company: companyFactory(companyId),
    Title: faker.lorem.words(6),
    UserId: userId,
    User: userFactory(userId),
    CurrencyId: currencyId,
    Currency: currencyFactory(currencyId),
    PaymentTypeId: paymentTypeId,
    PaymentType: paymentTypeFactory(paymentTypeId),
    JobTypeId: jobTypeId,
    JobType: jobTypeFactory(jobTypeId),
    LevelId: levelId,
    Level: levelFactory(levelId),
    Description: faker.lorem.paragraphs(3),
    HowToApply: faker.lorem.paragraph(),
    MinSalary: faker.datatype.number({ min: 22000, max: 36000 }),
    MaxSalary: faker.datatype.number({ min: 37000, max: 95000 }),
    IsRemote: faker.random.boolean(),
    IsRemoteOnly: faker.random.boolean()
  };
};
