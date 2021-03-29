import React, { FC } from "react";
import { ChakraProvider, Icon } from "@chakra-ui/react";
import { Paginator as PaginatorChakra, Previous, Next, PageGroup, Container } from "chakra-paginator";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

type PaginatorProps = {
  isDisabled: boolean;
  innerLimit: number;
  outerLimit: number;
  currentPage: number | string;
  pagesQuantity: number;
  onPageChange: () => void;
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
            Anterior Siguiente
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
