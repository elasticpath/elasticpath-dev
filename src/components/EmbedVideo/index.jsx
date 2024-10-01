import React, { useState, useEffect } from 'react';

const EmbedVideo = ({ videoUrl }) => {
  const [embedUrl, setEmbedUrl] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      let newEmbedUrl = '';

      // Check if it's a YouTube URL and convert it to an embeddable format
      if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
        const videoId = videoUrl.split('v=')[1]?.split('&')[0] || videoUrl.split('/').pop();
        newEmbedUrl = `https://www.youtube.com/embed/${videoId}`;
      }
      // Check if it's a Vidyard URL and convert it to an embeddable format
      else if (videoUrl.includes('vidyard.com')) {
        const videoId = videoUrl.split('/')[videoUrl.split('/').length - 1];
        newEmbedUrl = `https://play.vidyard.com/${videoId}.html`;
      }
      // Check if it's a Vimeo URL and convert it to an embeddable format
      else if (videoUrl.includes('vimeo.com')) {
        const videoId = videoUrl.split('/').pop();
        newEmbedUrl = `https://player.vimeo.com/video/${videoId}`;
      }
      // If the URL is not recognized, set an error
      else {
        throw new Error('Unsupported video platform. Please use YouTube, Vidyard, or Vimeo.');
      }

      setEmbedUrl(newEmbedUrl);
      setError(null); // Clear any previous errors if a valid URL is processed
    } catch (err) {
      setError(err.message);
    }
  }, [videoUrl]);

  if (error) {
    return <p className="text-red-500">{error}</p>; // Display error message in red
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
