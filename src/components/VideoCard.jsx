import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  const videoId = video?.id?.videoId;
  const { snippet, statistics } = video;

  if (!videoId) return null;

  return (
    <Card sx={{
      width: { xs: '100%', sm: 300, md: 320 },
      background: '#1e1e1e',
      borderRadius: 2,
      transition: 'transform 0.2s, box-shadow 0.2s',
      '&:hover': { transform: 'scale(1.03)', boxShadow: '0 8px 24px rgba(0,0,0,0.5)' },
    }}>
      <Link to={`/video/${videoId}`}>
        <CardMedia
          component="img"
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          height={180}
          sx={{ objectFit: 'cover' }}
        />
      </Link>
      <CardContent sx={{ p: 1.5 }}>
        <Link to={`/video/${videoId}`} style={{ textDecoration: 'none' }}>
          <Typography variant="subtitle2" color="#fff" sx={{ fontWeight: 600, mb: 0.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {snippet?.title}
          </Typography>
        </Link>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to={`/channel/${snippet?.channelId}`} style={{ textDecoration: 'none' }}>
            <Typography variant="caption" color="#aaa" sx={{ '&:hover': { color: '#fff' } }}>
              {snippet?.channelTitle}
            </Typography>
          </Link>
          {statistics?.viewCount && (
            <Typography variant="caption" color="#aaa">
              {parseInt(statistics.viewCount).toLocaleString()} views
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
