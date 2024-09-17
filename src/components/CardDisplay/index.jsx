import React from 'react';

const CardDisplay = ({ imageSrc, title, description, link }) => {
  return (
    <a href={link}
       className="block rounded-3xl overflow-hidden hover:shadow-md shadow-lg transition-shadow duration-200 no-underline hover:no-underline">
      <div className="w-full aspect-square">
        <img className="w-full h-full object-cover" src={imageSrc} alt={title} />
      </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
    </a>
);
};

export default CardDisplay;
