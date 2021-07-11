import * as yup from "yup";

export const email = yup.string().required().email().trim().label("El correo");
export const password = yup.string().required().label("La contraseña");
export const firstName = yup.string().required().min(2).trim().label("El nombre");
export const lastName = yup.string().required().min(2).trim().label("El apellido");
