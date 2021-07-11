import * as yup from "yup";
import { email, password } from "./common";

export const signInForm = yup.object().shape({
  email,
  password
});
