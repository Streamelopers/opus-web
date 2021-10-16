import ColaboratorList from "@/components/ColaboratorList";
import Page from "@/components/Page";
import { Colaborator } from "@/types/Colaborator";
import { GetServerSideProps } from "next";
import React, { FC } from "react";

type ColaboratorsProps = {
  webColaborators: Array<Colaborator>;
  apiColaborators: Array<Colaborator>;
};

const Colaborators: FC<ColaboratorsProps> = ({ webColaborators, apiColaborators }) => {
  return (
    <Page>
      <>
        <ColaboratorList colaborators={webColaborators} title={"Personas que han colaborado en el proyecto WEB"} />
        <ColaboratorList colaborators={apiColaborators} title={"Personas que han colaborado en el proyecto API"} />
      </>
    </Page>
  );
};

const getWebColaborators = async () => {
  const response = await fetch(process.env.COLABORATORS_WEB_URL);
  let data: Array<Colaborator> = await response.json();
  return data;
};

const getApiColaborators = async () => {
  const response = await fetch(process.env.COLABORATORS_API_URL);
  let data: Array<Colaborator> = await response.json();
  return data;
};

export const getServerSideProps: GetServerSideProps = async () => {
  let webColaborators = await getWebColaborators();
  let apiColaborators = await getApiColaborators();
  return {
    props: {
      webColaborators,
      apiColaborators
    }
  };
};

export default Colaborators;
