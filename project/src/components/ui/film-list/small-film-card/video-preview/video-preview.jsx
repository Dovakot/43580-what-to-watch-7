import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import {FilmInfo} from '../../../../../const';

function VideoPreview({name, video, preview, isActive}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isActive) {
      return;
    }

    const timer = setTimeout(() => {
      setIsPlaying(true);
      videoRef.current.play();
    }, FilmInfo.PLAY_DELAY_TIME);

    return () => {
      setIsPlaying(false);
      clearTimeout(timer);
    };
  }, [isActive]);

  return (
    isPlaying
      ? <video src={video} poster={preview} width={280} height={175} ref={videoRef} muted />
      : <img src={preview} alt={name} width={280} height={175} />
  );
}

VideoPreview.propTypes = {
  name: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default VideoPreview;
