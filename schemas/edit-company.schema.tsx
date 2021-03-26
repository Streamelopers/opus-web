import * as yup from "yup";

export const companyForm = yup.object().shape({
  name: yup.string().required().trim().label("El Nombre"),
});
