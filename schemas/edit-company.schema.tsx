import * as yup from "yup";

export const companyForm = yup.object().shape({
  name: yup.string().required().trim().min(3).max(255).label("El Nombre"),
  imageUrl: yup.string(),
  url: yup.string().url().trim().max(255).label("La página web de la compañia"),
  description: yup.string().trim().max(8000)
});
