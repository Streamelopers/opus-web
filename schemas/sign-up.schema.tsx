import * as yup from "yup";
// TODO: Removed for now, there's a bug in the package, I'm going to come back later
// import { setLocale } from "yup";
// import es from "yup-es";

// setLocale(es);

export const signUpForm = yup.object().shape({
  // The "min" validation message in spanish is missing a space between the `min` value and the validation message
  // I created the pull request fixing this
  // @see https://github.com/diegoulloao/yup-es/pull/1
  name: yup.string().required().min(2).trim().label("El Nombre"),
  email: yup.string().email().trim().label("El Correo"),
  password: yup.string().required().min(8).label("La Contraseña")
});
