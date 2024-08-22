import React from "react";
import dateFormat from "dateformat";
import { Card, CardContent } from "@mui/material";
import BrowserOnly from "@docusaurus/BrowserOnly";

export const ChangeLogEntry = ({ children, date }) => {
  const formattedDate = dateFormat(
    new Date(date),
    "mmmm dd, yyyy",
    true // Account for timezones
  ).toUpperCase();

  return (
    <BrowserOnly>
      {() => (
        <div>
          <Card
            sx={{
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                backgroundColor: "#E7EBEF", // prismatic brand.gray[40],
                color: "#353A3D", // prismatic brand.gray[90],
                display: "flex",
                padding: "16px",
              }}
            >
              <span>{formattedDate}</span>
            </div>
            <CardContent
              sx={{
                paddingBottom: "0 !important",
              }}
            >
              {children}
            </CardContent>
          </Card>
        </div>
      )}
    </BrowserOnly>
  );
};
