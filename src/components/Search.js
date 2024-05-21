// src/components/Search.js
// src/components/Search.js
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [author, setAuthor] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ query, author });
  };

  return (
    <Box component="form" onSubmit={handleSearch} sx={{ display: 'flex', gap: 2, mb: 2 }}>
      <TextField
        variant="outlined"
        label="Search for books"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        label="Filter by author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" type="submit">
        Search
      </Button>
    </Box>
  );
};

export default Search;
