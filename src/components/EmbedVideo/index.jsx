import React from 'react';

const EmbedVideo = ({ videoUrl }) => {
  let embedUrl = '';

  // Check if it's a YouTube or Vidyard URL and convert it to an embeddable format
  if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
    const videoId = videoUrl.split('v=')[1]?.split('&')[0] || videoUrl.split('/').pop();
    embedUrl = `https://www.youtube.com/embed/${videoId}`;
  } else if (videoUrl.includes('vidyard.com')) {
    const videoId = videoUrl.split('/')[videoUrl.split('/').length - 1];
    embedUrl = `https://play.vidyard.com/${videoId}.html`;
  }

  return (
    <iframe
      className="w-full h-full object-cover"
      src={embedUrl}
      title="Embedded video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default EmbedVideo;
