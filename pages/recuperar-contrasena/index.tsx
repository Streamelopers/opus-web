import Page from "@/components/Page";
import {
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack
} from "@chakra-ui/react";
import { Field, FieldProps, Form, Formik, FormikHelpers, FormikProps } from "formik";
import React/*, { useState }*/ from "react";
import * as yup from "yup";
import { ValidationError } from "yup";

const resetPasswordForm = yup.object().shape({
  email: yup.string().email().trim().label("El Correo"),
  password: yup.string().required().label("La Contraseña")
});

interface FormValues {
  email: string;
}

const ResetPassword = () => {
  // const [showPassword, setShowPassword] = useState(false);
  const formValues: FormValues = {
    email: ""
  };

  function handleSubmit(values: FormValues, actions: FormikHelpers<FormValues>) {
    resetPasswordForm
      .validate(values, { abortEarly: false })
      .then((result) => {
        console.log(result);
      })
      .catch((error: ValidationError) => {
        error.inner.forEach((validationError: ValidationError) => {
          actions.setFieldError(validationError.path as string, validationError.message);
        });
      })
      .finally(() => {
        actions.setSubmitting(false);
      });
  }

  return (
    <Page title="Recuperar contraseña" description="Formulario para recuperar contraseña">
      <Formik initialValues={formValues} onSubmit={handleSubmit}>
        {(props: FormikProps<FormValues>) => (
          <Flex justifyContent="center" mt="25">
            <Stack maxW="500px">
              <Heading fontWeight="700">Recuperar contraseña</Heading>
              <Divider />
              <Form>
                <Stack spacing="20px" mt="5">
                  <Field name="email">
                    {({ field, form }: FieldProps) => (
                      <FormControl isInvalid={!!form.errors.email && !!form.touched.email} isRequired>
                        <FormLabel htmlFor="email">Correo</FormLabel>
                        <Input {...field} type="email" autoComplete="email" id="email" placeholder="juan@ejemplo.com" />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Stack>
                <Button mt="3" colorScheme="blue" type="submit" width="100%" isLoading={props.isSubmitting}>
                  Recuperar contrasena
                </Button>
              </Form>
            </Stack>
          </Flex>
        )}
      </Formik>
    </Page>
  );
};

export default ResetPassword;
