import CollaboratorList from "@/components/CollaboratorList";
import Page from "@/components/Page";
import { Collaborator } from "@/types/Collaborator";
import { GetServerSideProps } from "next";
import React, { FC } from "react";

type CollaboratorsProps = {
  webCollaborators: Collaborator[];
  apiCollaborators: Collaborator[];
};

const Collaborators: FC<CollaboratorsProps> = ({ webCollaborators, apiCollaborators }) => {
  return (
    <Page>
      <>
        <CollaboratorList collaborators={webCollaborators} title={"Personas que han colaborado en el proyecto WEB"} />
        <CollaboratorList collaborators={apiCollaborators} title={"Personas que han colaborado en el proyecto API"} />
      </>
    </Page>
  );
};

const getWebCollaborators = async () => {
  const response = await fetch("https://api.github.com/repositories/329978688/contributors");
  let data: Collaborator[] = await response.json();
  return data;
};

const getApiCollaborators = async () => {
  const response = await fetch("https://api.github.com/repositories/329980816/contributors");
  let data: Collaborator[] = await response.json();
  return data;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      webCollaborators: await getWebCollaborators(),
      apiCollaborators: await getApiCollaborators()
    }
  };
};

export default Collaborators;
