import React from "react";

const InternalLink = ({ href, children }) => {
  if (!href.startsWith("/")) {
    throw new Error(
      "Relative links break if the docs url has a trailing slash. Use absolute links that start with / with the InternalLink component instead."
    );
  }

  return <a href={href}>{children}</a>;
};

export default InternalLink;
