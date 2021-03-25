import React, { useState } from "react";
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
  Divider,
  Link,
  Icon
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Formik, Form, Field, FieldProps, FormikProps, FormikHelpers } from "formik";
import { signInForm } from "../../schemas/sign-in.schema";
import { ValidationError } from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Page from "@/components/Page";

interface FormValues {
  email: string;
  password: string;
}

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const formValues: FormValues = {
    email: "",
    password: ""
  };

  function handleSubmit(values: FormValues, actions: FormikHelpers<FormValues>) {
    signInForm
      .validate(values, { abortEarly: false })
      .then((result) => {
        console.log(result);
      })
      .catch((error: ValidationError) => {
        error.inner.forEach((validationError) => {
          actions.setFieldError(validationError.path as string, validationError.message);
        });
      })
      .finally(() => {
        actions.setSubmitting(false);
      });
  }

  return (
    <Page title="Iniciar sesión" description="Formulario para iniciar sesión">
      <Formik initialValues={formValues} onSubmit={handleSubmit}>
        {(props: FormikProps<FormValues>) => (
          <Flex justifyContent="center" mt="25">
            <Stack maxW="500px">
              <Heading fontWeight="700">Inicio de Sesión</Heading>
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
                        <InputRightElement width="3rem" css={{ top: "37.5px" }}>
                          <Button h="1.75rem" size="sm" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <Icon as={FaEye} /> : <Icon as={FaEyeSlash} />}
                          </Button>
                        </InputRightElement>
                        <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Stack>

                <NextLink href="/recuperar-contrasena">
                  <Link
                    fontSize={["medium", "small"]}
                    color="blue.300"
                    mt="2"
                    mb="4"
                    display="block"
                    textAlign="right"
                    width="100%"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </NextLink>
                <Button colorScheme="blue" type="submit" width="100%" isLoading={props.isSubmitting}>
                  Registrarse
                </Button>

                <Divider mt="5" />

                <Flex justifyContent="center" alignItems="center" w="100%" mt="2">
                  <Text>
                    Si no tienes cuenta puedes
                    <NextLink href="/registro">
                      <Link ml="1" color="blue.300">
                        regístrarte ahora
                      </Link>
                    </NextLink>
                  </Text>
                </Flex>
              </Form>
            </Stack>
          </Flex>
        )}
      </Formik>
    </Page>
  );
};

export default SignInForm;
