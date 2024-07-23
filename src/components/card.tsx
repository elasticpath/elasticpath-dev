import React from "react";
import { styled } from "@mui/material";
import { Typography, List, Avatar } from "@mui/material";
import { ArrowForwardIosRounded } from "@mui/icons-material";
import Link from "@docusaurus/Link";
import BrowserOnly from "@docusaurus/BrowserOnly";

const Root = styled("div")(({ theme }) => ({
  minWidth: 320,
  width: 347,
  margin: theme.spacing(1.5),
  background: "#FDFEFE", // prismatic brand.gray[10]
  borderRadius: theme.spacing(1),
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  boxShadow: "0px 2px 8px 1px rgba(0, 0, 0, 0.20)",
  "& > div": {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  "& a": {
    borderBottom: "none",
  },
}));

const Header = styled("div")(({ theme }) => ({
  borderBottom: `1px solid "#E7EBEF"`, // prismatic brand.gray[40]
  minHeight: theme.spacing(6),
  position: "relative",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  color: "#5F666A", // prismatic brand.gray[80]
}));

const AvatarContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 20,
  bottom: -31,
  "& .MuiAvatar-root": {
    width: theme.spacing(7),
    height: theme.spacing(7),
    fontSize: "1.5em",
  },
}));

const Content = styled("div")(({ theme }) => ({
  padding: theme.spacing(3, 4, 1.5, 4),
  minHeight: "8em",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const Footer = styled("div")(({ theme }) => ({
  backgroundColor: "#E7EBEF", // prismatic brand.gray[40]
  minHeight: theme.spacing(7),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "auto",
  paddingLeft: "16px !important",
  paddingRight: "16px !important",
}));

const FooterCTA = styled("div")({
  marginLeft: "auto",
  marginRight: -7,
  display: "flex",
  "& .MuiButtonBase-root": {
    fontSize: "1.2em",
    textTransform: "unset",
  },
});

const FauxLink = styled("span")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  color: "#5E92E1", // prismatic brand.blueIris[500],
  position: "relative",
  "&::after": {
    transition: "background-color 0.15s",
    content: `""`,
    position: "absolute",
    right: 12,
    left: 1,
    bottom: 1,
    height: 2,
  },
}));

const StyledLink = styled(Link)({
  "&:hover": {
    textDecoration: "none",
  },
  "&:hover .faux-link::after": {
    backgroundColor: "rgb(94, 146, 225, 0.7)",
  },
});

interface CardProps {
  fullWidth?: boolean;
  primary?: string;
  secondary?: string;
  headerTitle?: string;
  headerArea?: string | JSX.Element;
  avatarName?: string;
  avatarUrl?: string;
  avatarVariant?: "rounded" | "square";
  headerText?: string;
  footerText?: string;
  footerTo?: string;
  footerCallToAction?: JSX.Element;
  footerCtaHasIcon?: boolean;
  className?: string;
  to?: string;
  linkText: string;
  list?: JSX.Element;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({
  children,
  fullWidth,
  primary,
  secondary,
  headerTitle,
  headerArea,
  avatarName,
  avatarUrl,
  avatarVariant = "square",
  headerText,
  footerText,
  footerTo,
  footerCallToAction,
  footerCtaHasIcon,
  className,
  linkText = "View",
  to,
  list,
  ...rest
}) => {
  const hasAvatar = avatarName || avatarUrl;

  return (
    <BrowserOnly>
      {() => (
        <Root
          className={className}
          style={
            fullWidth
              ? {
                  width: "100%",
                  marginLeft: 0,
                  marginRight: 0,
                }
              : {}
          }
          {...rest}
        >
          <Header>
            {hasAvatar && (
              <AvatarContainer>
                <Avatar variant={avatarVariant} src={avatarUrl} />
              </AvatarContainer>
            )}
            {headerTitle && (
              <Typography
                sx={{
                  marginRight: "auto",
                  color: "#191818", // prismatic brand.deepPurple[500],
                }}
                variant="h6"
              >
                {headerTitle}
              </Typography>
            )}
            <div>
              <div>{headerText}</div>
              {headerArea}
            </div>
          </Header>
          <Content
            data-cy="card-content"
            className={"card-content"}
            sx={hasAvatar ? { paddingTop: "3em" } : {}}
          >
            {(primary || secondary) && (
              <StyledLink to={to}>
                <Typography variant="h6">{primary}</Typography>
                <p
                  style={{
                    fontSize: "1.1em",
                    color: "#5F666A", // prismatic brand.gray[80],
                    margin: 0,
                  }}
                >
                  {secondary}{" "}
                  <FauxLink className={"faux-link"}>
                    {linkText}{" "}
                    <ArrowForwardIosRounded style={{ fontSize: "1em" }} />
                  </FauxLink>
                </p>
              </StyledLink>
            )}
            {list && <List>{list}</List>}
            {children}
          </Content>
          {(footerText || footerCallToAction) && (
            <Footer>
              {footerText && (
                <Link to={footerTo}>
                  <div
                    style={{
                      fontSize: "1.2em",
                      fontWeight: "bold",
                      color: "#5F666A", // prismatic brand.gray[80],
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {footerText}
                  </div>
                </Link>
              )}
              {footerCallToAction && (
                <FooterCTA sx={footerCtaHasIcon ? { marginRight: -15 } : {}}>
                  {footerCallToAction}
                </FooterCTA>
              )}
            </Footer>
          )}
        </Root>
      )}
    </BrowserOnly>
  );
};

export default Card;
