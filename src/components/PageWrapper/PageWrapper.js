import React, { useEffect, useContext } from "react";

import GlobalContext from "../../context/GlobalContext";

const headerConfigDefault = {
  theme: "light",
  bgClass: "dynamic-sticky-bg",
  variant: "primary",
  align: "right",
  isFluid: false,
  button: "account", // profile, cart, cta, account, null
  buttonText: "Get started free", // profile, cart, cta, account, null
  reveal: true,
};

const footerConfigDefault = {
  theme: "dark",
  style: "style1", //style1, style2, style3
};

const PageWrapper = ({
  children,
  headerConfig = null,
  footerConfig = null,
}) => {
  const gContext = useContext(GlobalContext);

  useEffect(() => {
    if (gContext.themeDark) {
      gContext.setHeader({
        ...headerConfigDefault,
        ...headerConfig,
        theme: "dark",
      });
      gContext.setFooter({
        ...footerConfigDefault,
        ...footerConfig,
        theme: "dark",
      });
    } else {
      gContext.setHeader({ ...headerConfigDefault, ...headerConfig });
      gContext.setFooter({ ...footerConfigDefault, ...footerConfig });
    }
  }, [gContext.themeDark]);

  return <>{children}</>;
};

export default PageWrapper;
