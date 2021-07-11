import faker from "faker/locale/es_MX";
import commonFieldsFactory from "./commonFieldsFactory";

export default (id: number) => {
  return {
    ...commonFieldsFactory({ Id: id }),
    Name: `${faker.address.city()}, ${faker.address.state()}, ${faker.address.country()}`,
    Latitude: faker.address.latitude(),
    Longitude: faker.address.longitude()
  };
};
