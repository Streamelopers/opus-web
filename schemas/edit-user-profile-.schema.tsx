import * as yup from "yup";


export const editProfileForm = yup.object().shape({
  firstName: yup.string().required().min(2).trim().label("El Nombre"),
  lastName: yup.string().required().min(2).trim().label("El apellido"),
  email: yup.string().email().trim().label("El Correo"),
  password: yup.string().required().min(8).label("La Contraseña"),
  confirmPassword: yup.string().required().min(8)
  .oneOf([yup.ref('password'), null], 'Ambas Contraseñas deben ser iguales')
});
