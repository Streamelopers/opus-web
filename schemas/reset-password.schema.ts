import * as yup from "yup";
import { email } from "./common";

export const resetPasswordForm = yup.object().shape({
  email
});
