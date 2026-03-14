import { Box, Typography, Alert } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import ChannelCard from '../components/ChannelCard';
import Loader from '../components/Loader';
import { fetchFromAPI } from '../Utils/fetchFromAPI';

const SearchFeed = () => {
  const { searchTerm } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['search', searchTerm],
    queryFn: () => fetchFromAPI(`search?part=snippet&q=${searchTerm}`),
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) return <Loader />;

  return (
    <Box p={2}>
      <Typography variant="h5" color="#fff" mb={2} fontWeight={700}>
        Results for: <span style={{ color: '#f00' }}>{searchTerm}</span>
      </Typography>
      {isError && <Alert severity="error" sx={{ mb: 2, background: '#2a0000', color: '#ff6b6b' }}>Search failed. API limit may have been reached.</Alert>}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', md: 'repeat(3,1fr)', lg: 'repeat(4,1fr)' }, gap: 2 }}>
        {data?.items?.map((item) => (
          item?.id?.videoId
            ? <VideoCard key={item.id.videoId} video={item} />
            : item?.id?.channelId
              ? <ChannelCard key={item.id.channelId} channelDetail={item} />
              : null
        ))}
      </Box>
    </Box>
  );
};

export default SearchFeed;
