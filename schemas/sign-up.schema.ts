import * as yup from "yup";

import { email, password, firstName, lastName } from "./common";

export const signUpForm = yup.object().shape({
  firstName,
  lastName,
  email,
  password
});
