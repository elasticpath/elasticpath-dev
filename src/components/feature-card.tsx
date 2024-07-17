import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { SvgIcon, Chip, styled } from "@mui/material";

type SvgIconComponent = typeof SvgIcon;

interface FeatureCardProps {
  title: string;
  description: string;
  to: string;
  Avatar?: SvgIconComponent;
  avatarColor: string;
  fixedWidth?: boolean;
  largeIcon?: boolean;
  cardImage?: string;
  darkBackground?: boolean;
  categories?: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  to,
  Avatar,
  avatarColor,
  fixedWidth,
  largeIcon,
  cardImage,
  darkBackground,
  categories = [],
}) => {
  const url = useBaseUrl(to);
  const cardImageUrl = useBaseUrl(`img/${cardImage}`);

  const StyledLink = styled(Link)({
    margin: "1em 0",
    background: "#FFFFFF", // prismatic common.white
    borderRadius: 5,
    boxShadow: "0px 3px 6px 1px rgba(0, 0, 0, 0.08)",
    border: `1px solid #D6DEE3`, // prismatic brand.gray[50]
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "box-shadow 0.5s, border-color 0.3s",
    "&:hover": {
      textDecoration: "none",
      boxShadow: "1px 3px 11px 1px rgba(74, 147, 174, 0.4)",
      borderColor: "#4A93AE", // prismatic brand.turquoise[500]
      ...(darkBackground
        ? {
            boxShadow: "1px 3px 11px 1px rgba(0, 0, 0, 0.4)",
          }
        : {}),
    },

    ...(fixedWidth
      ? {
          width: 300,
        }
      : {
          width: "calc(33% - 1em)",
        }),
  });

  return (
    <BrowserOnly>
      {() => (
        <StyledLink key={title} to={url} className={"feature-card"}>
          <div
            style={{
              padding: "1em 2em",
              display: "flex",
              flexDirection: "column",
              ...(largeIcon ? { margin: "10px 0" } : {}),
            }}
          >
            <div>
              <Avatar
                style={{
                  color: avatarColor,
                  fontSize: largeIcon ? "3em" : "2em",
                }}
              />

              {categories.map((category) => (
                <div
                  style={{
                    marginRight: ".5em",
                    float: "right",
                  }}
                  key={`${title}${category}`}
                >
                  <Chip
                    label={category}
                    variant="outlined"
                    style={{ color: "var(--blue-iris)" }}
                  />
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: 1.6,
                paddingBottom: ".5em",
              }}
            >
              <h4
                style={{
                  fontWeight: 500,
                  fontSize: 18,
                  marginBottom: 0,
                  lineHeight: 1.6,
                }}
              >
                {title}
              </h4>
              <div
                style={{
                  color: "var(--website-text-color)",
                  fontSize: 15,
                }}
              >
                {description}
              </div>
            </div>
          </div>
          {cardImage && (
            <div
              style={{
                height: 220,
              }}
            >
              <img src={cardImageUrl} alt="" />
            </div>
          )}
        </StyledLink>
      )}
    </BrowserOnly>
  );
};

export default FeatureCard;
