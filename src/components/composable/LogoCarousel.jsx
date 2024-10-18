import React from 'react';
import './ScrollingLogos.css'; // Import the CSS file for styling

const ScrollingLogos = () => {
  const logos = [
    'https://elastic-path.files.svdcdn.com/production/logos/logo_full-color-1_2023-08-11-151836_empf.svg?dm=1704716726',
    'https://elastic-path.transforms.svdcdn.com/production/logos/SerenaandLily.png?w=145&q=100&auto=format&fit=clip&dm=1692011476&s=e60ad243b3d0aa0ef9683ce90ad5bf9d',
    'https://elastic-path.transforms.svdcdn.com/production/logos/Orgill.png?w=145&q=100&auto=format&fit=clip&dm=1704716413&s=cc351cc8509524e2b0e74837e9f7d1b4',
    'https://elastic-path.transforms.svdcdn.com/production/logos/pella-new.png?w=145&q=100&auto=format&fit=clip&dm=1709710124&s=0940c480c4b938710e12ddee5c076f61',
    'https://elastic-path.files.svdcdn.com/production/logos/logo_full-color-1_2023-08-11-151836_empf.svg?dm=1704716726',
    'https://elastic-path.transforms.svdcdn.com/production/logos/SerenaandLily.png?w=145&q=100&auto=format&fit=clip&dm=1692011476&s=e60ad243b3d0aa0ef9683ce90ad5bf9d',
    'https://elastic-path.transforms.svdcdn.com/production/logos/Orgill.png?w=145&q=100&auto=format&fit=clip&dm=1704716413&s=cc351cc8509524e2b0e74837e9f7d1b4',
    'https://elastic-path.transforms.svdcdn.com/production/logos/pella-new.png?w=145&q=100&auto=format&fit=clip&dm=1709710124&s=0940c480c4b938710e12ddee5c076f61',
    // Add more logos as needed
  ];

  return (
    <div className="scrolling-logos-container">
      <div className="scrolling-logos-track">
        {logos.map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={index + logos.length} className="logo-item">
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingLogos;
