import React from 'react';
import DOMPurify from 'dompurify';

const EmbedVideo = ({ videoUrl }) => {
  let embedUrl = '';

  // Sanitize video URL using DOMPurify
  const sanitizedUrl = DOMPurify.sanitize(videoUrl);

  // Check if it's a YouTube or Vidyard URL and convert it to an embeddable format
  if (sanitizedUrl.includes('youtube.com') || sanitizedUrl.includes('youtu.be')) {
    const videoId = sanitizedUrl.split('v=')[1]?.split('&')[0] || sanitizedUrl.split('/').pop();
    embedUrl = `https://www.youtube.com/embed/${videoId}`;
  } else if (sanitizedUrl.includes('vidyard.com')) {
    const videoId = sanitizedUrl.split('/').pop();
    embedUrl = `https://play.vidyard.com/${videoId}.html`;
  }

  return (
    <iframe
      className="w-full h-full object-cover"
      src={DOMPurify.sanitize(embedUrl)} // Sanitize the embed URL
      title="Embedded video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default EmbedVideo;
