import { AppBar, Toolbar, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => (
  <AppBar position="sticky" sx={{ background: '#0f0f0f', boxShadow: '0 1px 0 #3d3d3d' }}>
    <Toolbar sx={{ justifyContent: 'space-between', gap: 2 }}>
      <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
        <Box
          component="img"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="YouTube"
          sx={{ height: 28, filter: 'brightness(0) invert(1)' }}
        />
      </Link>
      <SearchBar />
    </Toolbar>
  </AppBar>
);

export default Navbar;
