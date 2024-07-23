import React, { useState } from "react";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { styled } from "@mui/material";

const ExpandedVideoLink = styled("p")({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  cursor: "pointer",
  color: "#6078E2", // prismatic brand.bluePurple[500],
  "& span": {
    marginLeft: ".2em",
  },
});

type VimeoPlaceholder = {
  placeholder: true;
  video?: "";
  title?: "";
  collapsed?: false;
  timestamp?: "";
};

type VimeoVideo = {
  video: string;
  title: string;
  collapsed?: boolean;
  timestamp?: string;
  placeholder?: false;
};

type VimeoProps = VimeoPlaceholder | VimeoVideo;

const Vimeo = ({
  video,
  title,
  timestamp,
  collapsed,
  placeholder,
}: VimeoProps) => {
  const [clicked, setClicked] = useState(false);
  const vimeoSource = placeholder
    ? "https://player.vimeo.com/video/894287290"
    : `https://player.vimeo.com/video/${video}${
        timestamp ? `#t=${timestamp}` : ""
      }`;

  return (
    <BrowserOnly>
      {() => (
        <div style={{ margin: "0 auto" }}>
          {collapsed && (
            <ExpandedVideoLink onClick={() => setClicked(!clicked)}>
              <VideoLibraryIcon fontSize="small" />
              <span>{title}</span>
            </ExpandedVideoLink>
          )}
          {(clicked || !collapsed) && (
            <div
              style={{
                paddingTop: "calc(100% * 9 / 16)", // make 16 x 9 videos properly proportioned
                position: "relative",
              }}
            >
              <iframe
                src={vimeoSource}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                title={title}
                allowFullScreen
                data-ready={true}
              />
            </div>
          )}
        </div>
      )}
    </BrowserOnly>
  );
};

export default Vimeo;
