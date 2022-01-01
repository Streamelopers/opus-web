import React from "react";

const CollaboratorCard = ({ collaborator }) => {
  return (
    <div
      className="bg-white pt-9 pb-7 rounded-4 p-2 mb-9 feature-cardOne-adjustments border"
      style={{ borderColor: "#F6F7FB", height: "100%", width: "auto" }}
    >
      <div className="mb-7 d-flex justify-content-center">
        <a target="_blank" href={collaborator.html_url}>
          <img src={collaborator.avatar_url} width={"100%"} alt="" />
        </a>
      </div>
      <h2 className="mt-n4">
        <p className="text-center">
          <a
            target="_blank"
            href={collaborator.html_url}
            className="font-size-7 text-black-2 font-weight-bold mb-4"
          >
            {collaborator.login}
          </a>
        </p>
      </h2>
      <p className="text-center font-size-4">
        {collaborator.contributions} contribuciones
      </p>
      <hr className="bg-light border-2 border-top border-light" />
    </div>
  );
};

export default CollaboratorCard;
