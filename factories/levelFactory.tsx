import commonFieldsFactory from "./commonFieldsFactory";

export default (id: number) => {
  const levels: Array<string> = ["", "Beginner", "Junior", "Mid-level", "Senior", "Lead", "Manager"];
  return {
    ...commonFieldsFactory({ Id: id }),
    Name: levels[id - 1]
  };
};
