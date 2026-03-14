import { Box, Stack, Typography, Alert } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ChannelCard from '../components/ChannelCard';
import VideoCard from '../components/VideoCard';
import Loader from '../components/Loader';
import { fetchFromAPI } from '../Utils/fetchFromAPI';

const ChannelDetails = () => {
  const { id } = useParams();

  const { data: channelData, isLoading, isError } = useQuery({
    queryKey: ['channel', id],
    queryFn: () => fetchFromAPI(`channels?part=snippet,statistics,brandingSettings&id=${id}`),
    staleTime: 5 * 60 * 1000,
  });

  const { data: videosData, isLoading: loadingVideos, isError: videosError } = useQuery({
    queryKey: ['channelVideos', id],
    queryFn: () => fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`),
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) return <Loader />;
  if (isError) return <Alert severity="error" sx={{ m: 2, background: '#2a0000', color: '#ff6b6b' }}>Failed to load channel. Please try again later.</Alert>;

  const channel = channelData?.items?.[0];
  const bannerUrl = channel?.brandingSettings?.image?.bannerExternalUrl;

  return (
    <Box>
      <Box sx={{
        height: { xs: 120, md: 200 },
        background: bannerUrl ? `url(${bannerUrl}) center/cover no-repeat` : 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      }} />
      <ChannelCard channelDetail={channel} />
      <Box px={2}>
        <Typography variant="h6" color="#fff" mb={2} fontWeight={700}>Uploaded Videos</Typography>
        {loadingVideos && <Loader />}
        {videosError && <Alert severity="error" sx={{ background: '#2a0000', color: '#ff6b6b' }}>Failed to load videos.</Alert>}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', md: 'repeat(3,1fr)', lg: 'repeat(4,1fr)' }, gap: 2 }}>
          {videosData?.items?.filter(v => v?.id?.videoId).map((v) => (
            <VideoCard key={v.id.videoId} video={v} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetails;
