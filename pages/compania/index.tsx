import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaImage } from "react-icons/fa";
import { companyForm } from "../../schemas/edit-company.schema";
import Page from "@/components/Page";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
  Heading,
  Divider,
  Image,
  Textarea,
  Box
} from "@chakra-ui/react";

interface FormValues {
  name: string;
  imageUrl: string;
  url: string;
  description: string;
}

const CompanyForm = () => {
  const [imageSrc, setImageSrc] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: yupResolver(companyForm)
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const handleImageChange = (e: any) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setImageSrc(url);
  };

  return (
    <Page title="Compañia" description="Formulario de Creacion de Compañia">
      <Flex justifyContent="center" mt="25">
        <Stack maxW="800px" w="600px">
          <Heading fontWeight="700">Editar de Compañia</Heading>
          <Divider />
          <Text fontSize="xl">Editar los detalles de tu compañia</Text>
          <Box p={4} borderWidth="1px" rounded="lg" shadow="1px 1px 3px rgba(0,0,0,0.3)">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing="20px" mt="5">
                <FormControl isInvalid={!!errors.name} isRequired>
                  <FormLabel htmlFor="name">Nombre</FormLabel>
                  <Input id="name" placeholder="Nombre de la compaña" autoComplete="name" {...register("name")} />
                  <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                </FormControl>

                <FormControl>
                  <FormLabel>Logo</FormLabel>
                  <Text fontSize="xs" color="gray.500">
                    Formatos de imagen permitidos: SVG, PNG y JPG.
                  </Text>
                  {imageSrc && <Image boxSize="150px" objectFit="cover" src={imageSrc} m={2} />}
                  <Input
                    type="file"
                    id="logo"
                    hidden
                    {...register("imageUrl")}
                    accept="image/x-png,image/gif,image/jpeg"
                    onChange={(e) => handleImageChange(e)}
                  />
                  <Button rightIcon={<FaImage />} colorScheme="gray" size="sm" htmlFor="logo" as="label">
                    Seleccionar Imagen
                  </Button>
                </FormControl>

                <FormControl isInvalid={!!errors.url}>
                  <FormLabel htmlFor="url">Sitio Web</FormLabel>
                  <Input
                    type="url"
                    autoComplete="url"
                    id="url"
                    placeholder="http://www.companyx.com"
                    {...register("url")}
                  />
                  <FormErrorMessage>{errors.url?.message}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.description}>
                  <FormLabel htmlFor="text">Descripción</FormLabel>
                  <Textarea size="sm" placeholder="Descripción de la compañia" {...register("description")} />
                  <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
                </FormControl>

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

export default CompanyForm;
