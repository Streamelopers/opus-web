import commonFieldsFactory from "./commonFieldsFactory";

export default (id: number) => {
  const jobsTypes: { [key: number]: string } = {
    1: "Full-time",
    2: "Part-time",
    3: "Freelance",
    4: "Temporary",
    5: "Intership",
    6: "Remote"
  };
  return {
    ...commonFieldsFactory({ Id: id }),
    Name: jobsTypes[id]
  };
};
