import { useRef, useState } from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

const VideoPlayer = ({ videoId }) => {
  const containerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <Box ref={containerRef} sx={{ position: 'relative', width: '100%', background: '#000', borderRadius: 2, overflow: 'hidden' }}>
      <iframe
        width="100%"
        height="480"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="Video Player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        style={{ display: 'block' }}
      />
      <Tooltip title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}>
        <IconButton
          onClick={toggleFullscreen}
          sx={{ position: 'absolute', bottom: 8, right: 8, color: '#fff', background: 'rgba(0,0,0,0.5)', '&:hover': { background: 'rgba(0,0,0,0.8)' } }}
        >
          {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default VideoPlayer;
