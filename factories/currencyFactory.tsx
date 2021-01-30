import faker from "faker";
import commonFieldsFactory from "./commonFieldsFactory";

export default (id: number) => {
  return {
    ...commonFieldsFactory({ Id: id }),
    Name: faker.lorem.words(2),
    Symbol: faker.lorem.word(),
    ISOCode: faker.lorem.word()
  };
};
