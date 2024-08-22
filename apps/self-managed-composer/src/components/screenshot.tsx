import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ModalImage from "react-modal-image";
import BrowserOnly from "@docusaurus/BrowserOnly";

interface ScreenshotProps {
  filename: string;
  maxWidth?: string;
  dropShadow?: boolean;
  alt?: string;
  appFrame?: boolean;
  video?: boolean;
  caption?: string;
}

const Screenshot: React.FC<ScreenshotProps> = ({
  filename,
  maxWidth,
  dropShadow,
  alt,
  appFrame = true,
  video = false,
  caption = "",
}) => {
  const src = useBaseUrl(`img/${filename}`);

  const imageContainerStyle = {
    display: "inline-block",
    maxWidth: maxWidth || "100%",
    margin: "0",
    boxShadow: dropShadow
      ? "0 4px 8px 0 var(--gray06), 0 6px 20px 0 var(--gray05)"
      : null,
  };

  return (
    <BrowserOnly>
      {() => (
        <div
          style={{
            width: "100%",
            textAlign: "center",
            marginBottom: ".5em",
          }}
        >
          <figure style={imageContainerStyle}>
            {video ? (
              <video
                className={appFrame ? "appFrame" : null}
                autoPlay
                loop
                muted
                src={src}
                width="100%"
              />
            ) : (
              <ModalImage
                className={appFrame ? "appFrame" : null}
                small={src}
                large={src}
                hideDownload="true"
                hideZoom="true"
                alt={alt}
              />
            )}
            {caption ? <figcaption>{caption}</figcaption> : null}
          </figure>
        </div>
      )}
    </BrowserOnly>
  );
};

export default Screenshot;
