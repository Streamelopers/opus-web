import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { resetPasswordForm } from "../../schemas/reset-password.schema";

// styles & components
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

interface FormValues {
  email: string;
}

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: yupResolver(resetPasswordForm)
  });

  const toSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Page title="Recuperar contraseña" description="Formulario para recuperar contraseña">
      <Flex justifyContent="center" mt="25">
        <Stack maxW="500px">
          <Heading fontWeight="700">Recuperar contraseña</Heading>
          <Divider />
          <form onSubmit={handleSubmit(toSubmit)}>
            <Stack spacing="20px" mt="5">
              <FormControl isInvalid={!!errors.email} isRequired>
                <FormLabel htmlFor="email">Correo</FormLabel>
                <Input
                  type="email"
                  autoComplete="email"
                  id="email"
                  placeholder="juan@ejemplo.com"
                  {...register("email")}
                />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>
            </Stack>

            <Button mt="3" colorScheme="blue" type="submit" width="100%" isLoading={isSubmitting}>
              Recuperar contrasena
            </Button>
          </form>
        </Stack>
      </Flex>
    </Page>
  );
};

export default ResetPassword;
