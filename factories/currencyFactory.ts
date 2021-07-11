import faker from "faker/locale/es_MX";
import commonFieldsFactory from "./commonFieldsFactory";

export default (id: number) => {
  const codes: string[] = ["USD", "DOP", "EGP", "EUR", "GBP"];
  return {
    ...commonFieldsFactory({ Id: id }),
    Name: faker.lorem.words(2),
    Symbol: faker.lorem.word(),
    ISOCode: codes[id - 1]
  };
};
