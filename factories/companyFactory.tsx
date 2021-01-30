import faker from "faker";
import commonFieldsFactory from "./commonFieldsFactory";

export default (id: number) => {
  return {
    ...commonFieldsFactory({ Id: id }),
    Name: faker.company.companyName(),
    Website: faker.internet.url(),
    Description: faker.random.words(45),
    UserId: faker.random.number(250),
    // TODO: Remove this fields
    Picture: faker.image.business(500, 500)
  };
};
