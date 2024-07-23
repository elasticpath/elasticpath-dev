import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material";
import React from "react";

const StyledTooltip = styled(Tooltip)({
  arrow: {
    color: "var(--gray09)",
  },
  tooltip: {
    backgroundColor: "var(--gray09)",
    fontSize: 11,
    padding: "6px 8px",
    borderRadius: "3px",
  },
});

const OAuthCallbackURL = () => {
  return (
    <span>
      <strong>https://oauth2.us-east-2.elasticpathintegrations.com/callback</strong> (
      <a href="/docs/connections/#creating-an-oauth-20-app-in-a-third-party-service">
        See other region endpoints
      </a>
      )
    </span>
  );
};

export default OAuthCallbackURL;
