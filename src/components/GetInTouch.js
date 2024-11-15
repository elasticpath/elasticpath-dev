// src/components/GetInTouch.js
import React, { useEffect, useState } from 'react';

const GetInTouch = ({ defaultHref, children }) => {
  const [href, setHref] = useState(defaultHref);

  useEffect(() => {
    const url = new URL(defaultHref);
    const params = new URLSearchParams(window.location.search);

    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign'];
    utmParams.forEach(param => {
      if (!params.has(param)) {
        params.set(param, 'fy25q1-dev-get-in-touch'); // Replace with your default values
      }
    });

    url.search = params.toString();
    setHref(url.toString());
  }, [defaultHref]);

  return (
    <a href={href} className="navbar-book-demo">
      {children}
    </a>
  );
};

export default GetInTouch;
