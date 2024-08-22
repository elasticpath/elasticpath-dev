import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Card from "./card";

const ComponentCard = ({
  componentKey,
  iconBase64,
  name,
  description,
  totalActions,
  totalTriggers,
  totalDataSources,
}) => {
  const fullDocsUrl = useBaseUrl(`components/${componentKey}`);

  const headerText = [];
  if (totalActions > 0) {
    headerText.push(`${totalActions} action${totalActions > 1 ? "s" : ""}`);
  }
  if (totalTriggers > 0) {
    headerText.push(`${totalTriggers} trigger${totalTriggers > 1 ? "s" : ""}`);
  }
  if (totalDataSources > 0) {
    headerText.push(
      `${totalDataSources} data source${totalDataSources > 1 ? "s" : ""}`
    );
  }

  return (
    <Card
      primary={name}
      secondary={description}
      avatarUrl={`data:image/png;base64,${iconBase64}`}
      to={fullDocsUrl}
      headerText={headerText.join(", ")}
      linkText="View docs"
      style={{ width: "30%" }}
      footerCtaHasIcon
    />
  );
};

export default ComponentCard;
