import React, { useState } from "react";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { signInForm } from "../../schemas/sign-in.schema";

// styles & components
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
  email: string;
  password: string;
}

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: yupResolver(signInForm)
  });

  const toSubmit = (data: FormValues) => {
    console.log("sended....");
    console.log(data);
  };

  return (
    <Page title="Iniciar sesión" description="Formulario para iniciar sesión">
      <Flex justifyContent="center" mt="25">
        <Stack maxW="500px">
          <Heading fontWeight="700">Inicio de Sesión</Heading>
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
            <Button colorScheme="blue" type="submit" width="100%" isLoading={isSubmitting}>
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
          </form>
        </Stack>
      </Flex>
    </Page>
  );
};

export default SignInForm;
