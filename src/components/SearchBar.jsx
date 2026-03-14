import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <Paper component="form" onSubmit={handleSubmit} sx={{ display: 'flex', alignItems: 'center', borderRadius: 20, pl: 2 }}>
      <InputBase placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} sx={{ flex: 1 }} />
      <IconButton type="submit"><SearchIcon /></IconButton>
    </Paper>
  );
};

export default SearchBar;
