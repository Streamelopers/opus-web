import faker from "faker/locale/es_MX";
import commonFieldsFactory from "./commonFieldsFactory";

export default (id: number) => {
  return {
    ...commonFieldsFactory({ Id: id }),
    Name: faker.name.firstName(),
    Email: faker.internet.email(),
    Password: faker.internet.password()
  };
};
