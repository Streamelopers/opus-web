import commonFieldsFactory from "./commonFieldsFactory";

export default (id: number) => {
  const jobsTypes: { [key: number]: string } = {
    1: "Tiempo Completo",
    2: "Medio Tiempo",
    3: "Freelance",
    4: "Temporal",
    5: "Pasantía",
    6: "Remoto"
  };
  return {
    ...commonFieldsFactory({ Id: id }),
    Name: jobsTypes[id]
  };
};
