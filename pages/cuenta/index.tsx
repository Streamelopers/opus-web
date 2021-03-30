import React, { useState } from "react";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { editProfileForm } from "../../schemas/edit-user-profile-.schema";
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
  Icon,
  Box
} from "@chakra-ui/react";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const EditProfileForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: yupResolver(editProfileForm)
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Page title="Perfil de Usuario" description="Formulario de Edicion de Usuario">
      <Flex justifyContent="center" mt="25">
        <Stack maxW="500px" w="600px">
          <Heading fontWeight="700"> Editar tu cuenta</Heading>
          <Divider />
          <Text fontSize="xl">Editar los detalles de tu cuenta</Text>
            <Box
                p={4}
                borderWidth="1px"
                rounded="lg"
                shadow="1px 1px 3px rgba(0,0,0,0.3)"
            >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing="20px" mt="5">
                <FormControl isInvalid={!!errors.firstName} isRequired>
                    <FormLabel htmlFor="firstname">Nombres</FormLabel>
                    <Input id="firstname" placeholder="Juan Jose" autoComplete="firstname" {...register("firstName")} />
                    <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.lastName} isRequired>
                    <FormLabel htmlFor="lastname">Apellidos</FormLabel>
                    <Input id="lastname" placeholder="Perez Perez" autoComplete="lastname" {...register("lastName")} />
                    <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
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

                <FormControl isInvalid={!!errors.confirmPassword} isRequired>
                    <FormLabel htmlFor="confirmPassword">Confirmación de Contraseña</FormLabel>
                    <Input
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    id="confirmPassword"
                    placeholder="******"
                    {...register("confirmPassword")}
                    />
                    <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
                </FormControl>

                <Divider />

                <Button mt={4} colorScheme="blue" type="submit" isLoading={isSubmitting}>
                    Guardar
                </Button>
                </Stack>
            </form>
            </Box>
        </Stack>
      </Flex>
    </Page>
  );
};

export default EditProfileForm;
