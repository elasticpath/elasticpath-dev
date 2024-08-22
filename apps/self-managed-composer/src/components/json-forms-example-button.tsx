import BrowserOnly from "@docusaurus/BrowserOnly";
import { LaunchTwoTone } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import React from "react";

interface JsonFormsExampleButtonProps {
  exampleKey: string;
}

const JsonFormsExampleButton: React.FC<JsonFormsExampleButtonProps> = ({
  exampleKey,
}) => {
  const endpoint = `/docs/jsonforms/playground/?key=${exampleKey}`;

  return (
    <BrowserOnly>
      {() => (
        <Grid container justifyContent="flex-end">
          <Button
            variant="contained"
            href={endpoint}
            target="_blank"
            endIcon={<LaunchTwoTone />}
          >
            See example in playground
          </Button>
        </Grid>
      )}
    </BrowserOnly>
  );
};

export default JsonFormsExampleButton;
