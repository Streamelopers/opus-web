import { Badge } from "@chakra-ui/react";
import React, { FC } from "react";

type RemoteBadgeProps = {
  isRemote: boolean;
  isRemoteOnly: boolean;
};

const RemoteBadge: FC<RemoteBadgeProps> = ({ isRemote, isRemoteOnly }: RemoteBadgeProps) => {
  if (isRemote) {
    return (
      <Badge colorScheme="yellow" title="Trabajar de forma remota es una opción">
        Permite remoto
      </Badge>
    );
  }

  if (isRemoteOnly) {
    return (
      <Badge colorScheme="green" title="Se trabaja de forma remota a tiempo completo">
        Remoto
      </Badge>
    );
  }

  return <span />;
};

export default RemoteBadge;
