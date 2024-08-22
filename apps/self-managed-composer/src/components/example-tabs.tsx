import React from "react";
import Tabs from "@theme/Tabs";

const tabNames = {
  webapp: "Web App",
  cli: "CLI",
  api: "API",
};

const ExampleTabs = ({ children }) => {
  const tabsToShow = children.map((child) => ({
    label: tabNames[child.props.value],
    value: child.props.value,
  }));

  return (
    <Tabs defaultValue={tabsToShow[0].value} values={tabsToShow}>
      {children}
    </Tabs>
  );
};

export default ExampleTabs;
