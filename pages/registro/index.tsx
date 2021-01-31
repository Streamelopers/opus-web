import { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputRightElement,
  Stack,
  Text,
  Heading,
  Divider
} from "@chakra-ui/react";

import { Formik, Form, Field, FieldProps, FormikProps, FormikHelpers } from "formik";
interface FormValues {
  name: string;
  email: string;
  password: string;
}

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const formValues: FormValues = {
    name: "",
    email: "",
    password: ""
  };

  function handleSubmit(values: FormValues, actions: FormikHelpers<FormValues>) {
    actions.setFieldError("name", "adios");
    setTimeout(() => {
      actions.setSubmitting(false);
    }, 2000);
  }

  return (
    <Formik initialValues={formValues} onSubmit={handleSubmit}>
      {(props: FormikProps<FormValues>) => (
        <Flex justifyContent="center" mt="25">
          <Stack maxW="500px">
            <Heading fontWeight="700">Registro</Heading>
            <Divider />
            <Text fontSize="xl">Regístrate en la plataforma para poder publicar empleos</Text>
            <Form>
              <Stack spacing="20px" mt="5">
                <Field name="name">
                  {({ field, form }: FieldProps) => (
                    <FormControl isInvalid={!!form.errors.name && !!form.touched.name} isRequired>
                      <FormLabel htmlFor="name">Nombre</FormLabel>
                      <Input {...field} id="name" placeholder="Juan Perez" autoComplete="name" />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="email">
                  {({ field, form }: FieldProps) => (
                    <FormControl isInvalid={!!form.errors.email && !!form.touched.email} isRequired>
                      <FormLabel htmlFor="email">Correo</FormLabel>
                      <Input {...field} type="email" autoComplete="email" id="email" placeholder="juan@ejemplo.com" />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="password">
                  {({ field, form }: FieldProps) => (
                    <FormControl isInvalid={!!form.errors.password && !!form.touched.password} isRequired>
                      <FormLabel htmlFor="password">Contraseña</FormLabel>
                      <Input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        autoComplete="new-password"
                        id="password"
                        placeholder="******"
                      />
                      <InputRightElement width="4.5rem" css={{ top: "37.5px" }}>
                        <Button h="1.75rem" size="sm" onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                      <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Button mt={4} colorScheme="teal" type="submit" isLoading={props.isSubmitting}>
                  Registrarse
                </Button>
              </Stack>
            </Form>
          </Stack>
        </Flex>
      )}
    </Formik>
  );
};

export default SignUpForm;
