import * as yup from "yup";

export const resetPasswordForm = yup.object().shape({
  email: yup.string().email().trim().label("El Correo")
});
