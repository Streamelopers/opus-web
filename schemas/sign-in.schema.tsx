import * as yup from "yup";

export const signInForm = yup.object().shape({
  email: yup.string().email().trim().label("El Correo"),
  password: yup.string().required().label("La Contraseña")
});
