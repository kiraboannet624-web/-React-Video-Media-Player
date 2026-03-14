import { useState } from 'react';
import { Box, Stack, Typography, Alert } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import Sidebar from '../components/Sidebar';
import VideoCard from '../components/VideoCard';
import Loader from '../components/Loader';
import { fetchFromAPI } from '../Utils/fetchFromAPI';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['feed', selectedCategory],
    queryFn: () => fetchFromAPI(`search?part=snippet&q=${selectedCategory}`),
    staleTime: 5 * 60 * 1000,
  });

  return (
    <Stack direction={{ xs: 'column', md: 'row' }}>
      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Box p={2} sx={{ flex: 1, overflowY: 'auto', height: { md: '92vh' } }}>
        <Typography variant="h5" color="#fff" mb={2} fontWeight={700}>
          {selectedCategory} <span style={{ color: '#f00' }}>Videos</span>
        </Typography>
        {isLoading && <Loader />}
        {isError && <Alert severity="error" sx={{ background: '#2a0000', color: '#ff6b6b' }}>Failed to load videos. API limit may have been reached. Please try again later.</Alert>}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 2 }}>
          {data?.items?.filter(item => item?.id?.videoId).map((video) => (
            <VideoCard key={video.id.videoId} video={video} />
          ))}
        </Box>
      </Box>
    </Stack>
  );
};

export default Feed;
