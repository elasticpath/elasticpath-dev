import React, { useEffect, useState } from 'react';

const FreeTrial = ({ defaultHref, children }) => {
  const [href, setHref] = useState(defaultHref);

  useEffect(() => {
    const url = new URL(defaultHref);
    const params = new URLSearchParams(window.location.search);

    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign'];
    utmParams.forEach(param => {
      if (!params.has(param)) {
        params.set(param, 'fy25q1-dev-free-trial'); // Replace with your default values
      }
    });

    url.search = params.toString();
    setHref(url.toString());
  }, [defaultHref]);

  return (
    <a href={href} className="navbar__item navbar__link">
      {children}
    </a>
  );
};

export default FreeTrial;
