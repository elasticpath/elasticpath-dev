import React from 'react';
import EmbedVideo from '../EmbedVideo'; // Import the new EmbedVideo component

const Video = ({ mediaSrc, mediaType, title, size, float }) => {
  const floatClass = float === 'right' ? 'float-right' : '';

  return (
    <div
      className={`block aspect-video ${floatClass} rounded-3xl overflow-hidden p-0 m-6 shadow-lg no-underline hover:no-underline dark:bg-gray-900`}
      style={{width: size}}
    >
      <div className={"aspect-video"}>
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
    </div>
  );
};

export default Video;
