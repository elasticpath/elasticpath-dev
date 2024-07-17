import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

type YouTubeVideo = {
  id: string;
  title: string;
};

const Vimeo = ({ id, title }: YouTubeVideo) => {
  const youtubeUrl = new URL(`https://www.youtube.com/embed/${id}`);

  // Prevent YouTube from recommending additional videos
  youtubeUrl.searchParams.append("rel", "0");

  return (
    <BrowserOnly>
      {() => (
        <div style={{ margin: "0 auto" }}>
          <div
            style={{
              paddingTop: "calc(100% * 9 / 16)", // make 16 x 9 videos properly proportioned
              position: "relative",
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              src={youtubeUrl.href}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </div>
        </div>
      )}
    </BrowserOnly>
  );
};

export default Vimeo;
