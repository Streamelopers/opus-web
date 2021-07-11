import * as yup from "yup";

import { signUpForm } from "./sign-up.schema";
import { password } from "./common";

export const editProfileForm = signUpForm.shape({
  confirmPassword: password.oneOf([yup.ref("password"), null], "Las contraseñas no coinciden")
});
