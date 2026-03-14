import { Box, Typography, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

const ChannelCard = ({ channelDetail }) => {
  const channelId = channelDetail?.id?.channelId || channelDetail?.id;
  const thumbnail = channelDetail?.snippet?.thumbnails?.high?.url || channelDetail?.snippet?.thumbnails?.default?.url;
  const title = channelDetail?.snippet?.title;
  const subscriberCount = channelDetail?.statistics?.subscriberCount;

  if (!channelId) return null;

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      p: 2,
      background: '#1e1e1e',
      borderRadius: 2,
      transition: 'transform 0.2s',
      '&:hover': { transform: 'scale(1.03)' },
    }}>
      <Link to={`/channel/${channelId}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar src={thumbnail} alt={title} sx={{ width: 100, height: 100, mb: 1, border: '2px solid #f00' }} />
        <Typography variant="subtitle1" color="#fff" fontWeight={600} textAlign="center">{title}</Typography>
        {subscriberCount && (
          <Typography variant="caption" color="#aaa">
            {parseInt(subscriberCount).toLocaleString()} subscribers
          </Typography>
        )}
      </Link>
    </Box>
  );
};

export default ChannelCard;
