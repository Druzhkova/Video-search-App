import React from 'react';

export const Frame = ({ data }) => (
  data
    ? (
      <iframe
        title={data.id.videoId}
        src={`http://www.youtube.com/embed/${data.id.videoId}?enablejsapi=1&origin=http://example.com`}
        frameBorder="0"
        allowFullScreen
      >
        Your browser does not support iframes, please update
      </iframe>
    )
    : null
);
