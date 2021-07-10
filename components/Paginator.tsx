import React, { FC } from "react";
import { ChakraProvider, Icon, ButtonProps } from "@chakra-ui/react";
import { Paginator as PaginatorChakra, Previous, Next, PageGroup, Container } from "chakra-paginator";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { IconType } from "react-icons";

type PaginatorProps = {
  pagesQuantity: number;
  onPageChange: (page: number) => void;
  normalStyles?: ButtonProps;
  activeStyles?: ButtonProps;
  separatorStyles?: ButtonProps;
  currentPage?: number;
  innerLimit?: number;
  outerLimit?: number;
  separatorIcon?: IconType;
  hoverIconRight?: IconType;
  hoverIconLeft?: IconType;
  isDisabled?: boolean;
};

const Paginator: FC<PaginatorProps> = ({
  isDisabled,
  innerLimit,
  outerLimit,
  currentPage,
  pagesQuantity
}: PaginatorProps) => {
  return (
    <ChakraProvider>
      <PaginatorChakra
        isDisabled={isDisabled}
        innerLimit={innerLimit}
        outerLimit={outerLimit}
        currentPage={currentPage}
        pagesQuantity={pagesQuantity}
        onPageChange={console.log}
        normalStyles={{
          w: 7,
          fontSize: "sm",
          colorScheme: "gray"
        }}
        separatorStyles={{
          w: 7,
          colorScheme: "gray"
        }}
        activeStyles={{
          w: 7,
          fontSize: "sm",
          colorScheme: "blue"
        }}
      >
        <Container align="center" justify="space-between" w="full" p={4}>
          <Previous colorScheme="blue">
            <Icon as={FaChevronLeft} />
            Anterior
          </Previous>
          <PageGroup isInline align="center" />
          <Next colorScheme="blue">
            Siguiente
            <Icon as={FaChevronRight} />
          </Next>
        </Container>
      </PaginatorChakra>
    </ChakraProvider>
  );
};

export default Paginator;
