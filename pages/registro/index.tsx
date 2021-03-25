import React, { useState } from "react";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { signUpForm } from "../../schemas/sign-up.schema";
import Page from "@/components/Page";
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

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: yupResolver(signUpForm)
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Page title="Regsitro" description="Formulario de registro">
      <Flex justifyContent="center" mt="25">
        <Stack maxW="500px">
          <Heading fontWeight="700">Registro</Heading>
          <Divider />
          <Text fontSize="xl">Regístrate en la plataforma para poder empezar a publicar empleos</Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing="20px" mt="5">
              <FormControl isInvalid={!!errors.name} isRequired>
                <FormLabel htmlFor="name">Nombre</FormLabel>
                <Input id="name" placeholder="Juan Perez" autoComplete="name" {...register("name")} />
                <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
              </FormControl>

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

              <FormControl isInvalid={!!errors.password} isRequired>
                <FormLabel htmlFor="password">Contraseña</FormLabel>
                <Input
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  id="password"
                  placeholder="******"
                  {...register("password")}
                />
                <InputRightElement width="3rem" css={{ top: "37.5px" }}>
                  <Button h="1.75rem" size="sm" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <Icon as={FaEye} /> : <Icon as={FaEyeSlash} />}
                  </Button>
                </InputRightElement>
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>

              <Button mt={4} colorScheme="blue" type="submit" isLoading={isSubmitting}>
                Registrarse
              </Button>

              <Divider mt="5" />

              <Flex justifyContent="center" alignItems="center" w="100%">
                <Text>Si ya tienes cuenta puedes</Text>
                <NextLink href="/iniciar-sesion">
                  <Link ml="1" color="blue.300">
                    iniciar sesión aquí
                  </Link>
                </NextLink>
              </Flex>
            </Stack>
          </form>
        </Stack>
      </Flex>
    </Page>
  );
};

export default SignUpForm;
