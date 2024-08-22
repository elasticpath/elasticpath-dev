import React from "react";
import { LaunchTwoTone } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

interface ExampleIntegrationLinkProps {
  href: string;
  title?: string;
}

const ExampleIntegrationLink = ({
  href,
  title,
}: ExampleIntegrationLinkProps) => {
  return (
    <Grid container justifyContent="flex-end">
      <Button
        variant="contained"
        href={href}
        target="_blank"
        endIcon={<LaunchTwoTone />}
      >
        {title ?? "Example Integration"}
      </Button>
    </Grid>
  );
};

export default ExampleIntegrationLink;
