import React, { useState } from "react";
import { TextField, Paper, styled } from "@mui/material";
import BrowserOnly from "@docusaurus/BrowserOnly";

const StyledPaper = styled(Paper)(({ theme }) => ({
  marginBottom: "1em",
  textAlign: "center",
  "& .MuiTextField-root": {
    margin: theme.spacing(1),
    width: "25ch",
  },
}));

const slugify = (value) =>
  value
    ?.replace(/[^0-9a-zA-Z]+/gi, " ")
    .trim()
    .split(/\s+/)
    .map((item, index) =>
      index === 0
        ? item.toLowerCase()
        : item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
    )
    .join("") || "";

const SlugifyBox = (props) => {
  const [stepName, setStepName] = useState(props.defaultStepName);

  return (
    <BrowserOnly>
      {() => (
        <StyledPaper elevation={1}>
          <TextField
            label="Step Name"
            value={stepName}
            variant="outlined"
            onChange={(event) => setStepName(event.target.value)}
          />
          <TextField
            label="Reference Name / Step ID"
            value={slugify(stepName)}
            variant="outlined"
            disabled
          />
        </StyledPaper>
      )}
    </BrowserOnly>
  );
};
export default SlugifyBox;
