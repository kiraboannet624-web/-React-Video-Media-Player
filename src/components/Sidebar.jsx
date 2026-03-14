import { Stack, Button, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import ArticleIcon from '@mui/icons-material/Article';
import SchoolIcon from '@mui/icons-material/School';
import MovieIcon from '@mui/icons-material/Movie';
import CodeIcon from '@mui/icons-material/Code';
import LiveTvIcon from '@mui/icons-material/LiveTv';

const categories = [
  { name: 'New', icon: <HomeIcon /> },
  { name: 'Coding', icon: <CodeIcon /> },
  { name: 'Music', icon: <MusicNoteIcon /> },
  { name: 'Gaming', icon: <SportsEsportsIcon /> },
  { name: 'Sports', icon: <SportsSoccerIcon /> },
  { name: 'News', icon: <ArticleIcon /> },
  { name: 'Education', icon: <SchoolIcon /> },
  { name: 'Movies', icon: <MovieIcon /> },
  { name: 'Live', icon: <LiveTvIcon /> },
];

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction={{ xs: 'row', md: 'column' }}
    sx={{
      overflowY: { md: 'auto' },
      overflowX: { xs: 'auto', md: 'hidden' },
      height: { xs: 'auto', md: '92vh' },
      width: { xs: '100%', md: 200 },
      borderRight: { md: '1px solid #3d3d3d' },
      py: 1,
    }}
  >
    {categories.map(({ name, icon }) => (
      <Button
        key={name}
        onClick={() => setSelectedCategory(name)}
        startIcon={icon}
        sx={{
          justifyContent: { xs: 'center', md: 'flex-start' },
          color: selectedCategory === name ? '#fff' : '#aaa',
          background: selectedCategory === name ? '#f00' : 'transparent',
          borderRadius: 2,
          px: 2,
          py: 1,
          minWidth: { xs: 'auto', md: '100%' },
          textTransform: 'capitalize',
          whiteSpace: 'nowrap',
          '&:hover': { background: selectedCategory === name ? '#cc0000' : '#2a2a2a' },
        }}
      >
        <Typography variant="body2" sx={{ display: { xs: 'none', md: 'block' } }}>{name}</Typography>
      </Button>
    ))}
  </Stack>
);

export default Sidebar;
