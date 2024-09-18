import React from 'react';
import EmbedVideo from '../EmbedVideo'; // Import the new EmbedVideo component

const CardDisplay = ({ mediaSrc, mediaType, title, description, link, className }) => {
  return (
    <a
      href={link}
      className={`block rounded-3xl overflow-hidden hover:bg-gray-100 hover:shadow-md shadow-lg transition-shadow duration-200 no-underline hover:no-underline dark:bg-gray-900 ${className}`}
    >
      <div className="aspect-video">
        {mediaType === 'video' ? (
          <video className="w-full h-full object-cover" controls>
            <source src={mediaSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : mediaType === 'embed' ? (
          <EmbedVideo videoUrl={mediaSrc} /> // Use EmbedVideo for YouTube/Vidyard URLs
        ) : (
          <img className="w-full h-full object-cover" src={mediaSrc} alt={title} />
        )}
      </div>
      {(title || description) && (
        <div className="px-4 py-2">
          <div className="font-bold text-xl mb-2">{title}</div>
          <div className="text-gray-700 dark:text-white">{description}</div>
      </div>
        )}
    </a>
  );
};

export default CardDisplay;
