import React from "react";
import absoluteUrl from "next-absolute-url";

import PageWrapper from "../components/PageWrapper";
import CollaboratorList from "../components/Collaborator/CollaboratorList";

const Collaborator = ({ webCollaborators, apiCollaborators }) => {
  return (
    <PageWrapper>
      <div className="bg-default pt-md-30 pt-sm-25 pt-23 pb-md-27 pb-sm-20 pb-17">
        <div className="container">
          <h3 className="mb-9">Colaboradores del proyecto Web</h3>
          <hr className="bg-light border-2 border-top border-light" />
          <CollaboratorList collaborators={webCollaborators} />

          <h3 className="mt-9 mb-9">Colaboradores del proyecto API</h3>
          <hr className="bg-light border-2 border-top border-light" />
          <CollaboratorList collaborators={apiCollaborators} />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Collaborator;

const getWebCollaborators = async () => {
  const result = await fetch(absoluteUrl(process.env.COLLABORATORS_WEB_URL));
  const data = await result.json();
  return data;
};

const getApiCollaborators = async () => {
  const result = await fetch(absoluteUrl(process.env.COLLABORATORS_API_URL));
  const data = await result.json();
  return data;
};

export const getStaticProps = async () => {
  const webCollaborators = await getWebCollaborators();
  const apiCollaborators = await getApiCollaborators();

  return {
    props: {
      webCollaborators,
      apiCollaborators,
    },
  };
};
